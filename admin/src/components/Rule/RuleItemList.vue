<template>
  <div>
    <el-card>
      <div slot="header">
        <span>规格值列表</span>
      </div>
      <el-table :data="model">
        <el-table-column prop="_id" label="ID"></el-table-column>
        <el-table-column prop="name" label="规格值名称"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="$router.push(`/ruleitem/edit/${scope.row._id}`)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
    data() {
        return {
            model: []
        }
    },
    methods: {
        async fetch() {
            const res = await this.$http.get('/ruleitem')
            this.model = res.data
        },
        async handleDelete(row){
           this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
            }).then(async() => {
                await this.$http.delete(`/ruleitem/${row._id}`)
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                });
                this.fetch();
                })
    }},
    created () {
        this.fetch();
    },
}
</script>

<style lang="scss" scoped>
</style>