<template>
  <div>
    <van-nav-bar fixed left-arrow>
      <van-search
        placeholder="请输入搜索关键词"
        v-model="value"
        shape="round"
        slot="title"
      />
      <van-icon name="ellipsis" slot="right" />
    </van-nav-bar>
    <div style="display:flex">
      <van-sidebar v-model="activeKey">
        <van-sidebar-item
          v-for="(item,index) in categoryList"
          :key="item._id"
          :title="item.name"
          @click="add(index)"
        />
      </van-sidebar>
      <div class="item-container">
        <div v-for="item in itemCategoryList" :key="item._id">
          <h4>{{item.name}}</h4>
          <van-grid :border="false" :column-num="3">
            <router-link tag='van-grid-item' :to='`/category/${value._id}`' v-for="value in item.seccategories" :key="value._id">
              <van-image :src="value.icon" />
              <span class="item-name">{{value.name}}</span>
            </router-link>
          </van-grid>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getCate} from '../api/category'
import {getItemCateById} from '../api/itemCategory'

export default {
  data() {
    return {
      value: "",
      categoryList: [],
      itemCategoryList: [],
      activeKey: 0
    };
  },
  methods: {
    async fetchCategory() {
      const {data} = await getCate({
        query:{limit:100}
      })
      this.categoryList = data.data;
    },
    async add(index) {
      const id = this.categoryList[index]._id;
      const res = await getItemCateById(id)
      this.itemCategoryList = res.data;
    },
  },
  created() {
    this.fetchCategory();
  }
};
</script>

<style lang="scss" scoped>
.van-nav-bar {
  .van-icon {
    font-size: 20px;
    color: #725e5e;
  }
  .van-search{
    padding: 6px 0px
  }
}
img {
  width: 70px;
  height: 70px;
}
.van-sidebar-item {
  width: 85px;
  height: 46px;
}
.item-container {
  padding-top: 5px;
  .item-name {
    font-size: 12px;
  }
}
</style>