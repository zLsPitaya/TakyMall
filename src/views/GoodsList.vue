<template>
  <div>

    <body>
      <nav-header></nav-header>
      <nav-breader></nav-breader>
      <div class="accessory-result-page">
        <div class="container">
          <div class="filter-nav">
            <span class="sortby">排序:</span>
            <a href="javascript:void(0)" class="default cur" @click="defaultSort()">默认</a>
            <a href="javascript:void(0)" class="price" v-bind:class="{'sort-up':sortFlag}" @click="sortGoods()">价格
              <svg class="icon icon-arrow-short">
                <use xlink:href="#icon-arrow-short"></use>
              </svg>
            </a>
            <a href="javascript:void(0)" class="filterby" @click.stop="showFilterPop">筛选</a>
          </div>
          <div class="accessory-result">
            <!-- filter -->
            <div class="filter" id="filter" v-bind:class="{'filterby-show':filterBy}">
              <dl class="filter-price">
                <dt>价格区间:</dt>
                <dd>
                  <a href="javascript:void(0)" @click="setPriceFilter('all')" v-bind:class="{'cur': priceChecked == 'all'}">选择价格</a>
                </dd>
                <dd v-for="(item, index) in priceFilter">
                  <a href="javascript:void(0)" @click="setPriceFilter(index)" v-bind:class="{'cur': priceChecked == index}">￥ {{item.startPrice}} - {{item.endPrice}} 元</a>
                </dd>
              </dl>
            </div>

            <div class="accessory-list-wrap">
              <div class="accessory-list col-4">
                <ul>
                  <li v-for="item in goodsList">
                    <div class="pic">
                      <a href="#"><img v-lazy="'/static/'+ item.productImage" alt=""></a>
                    </div>
                    <div class="main">
                      <div class="name">{{item.productName}}</div>
                      <div class="price">￥{{item.salePrice}}</div>
                      <div class="btn-area">
                        <a href="javascript:;" class="btn btn--m" @click="addCart(item.productId)">加入购物车</a>
                      </div>
                    </div>
                  </li>
                </ul>
                <div class="view-more-normal" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="20">
                  <img src="./../../static/loading-svg/loading-spinning-bubbles.svg" v-show="loading">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="md-overlay" v-show="overLayFlag" @click.stop="closePop"></div>
      <nav-footer></nav-footer>
    </body>
  </div>
</template>

<script>
import './../assets/css/base.css';
import './../assets/css/goods-list.css';
import NavHeader from "./../components/NavHeader.vue";
import NavFooter from "./../components/NavFooter.vue";
import NavBreader from "./../components/NavBreader.vue";
import axios from "axios";

export default {
  data() {
    return {
      goodsList: [],
      page: 1,
      pageSize: 8,
      sortFlag: true,
      busy: true,
      loading: false,
      priceFilter: [{
        startPrice: '0.00',
        endPrice: '100.00'
      },
      {
        startPrice: '100.00',
        endPrice: '500.00'
      },
      {
        startPrice: '500.00',
        endPrice: '1000.00'
      },
      {
        startPrice: '1000.00',
        endPrice: '2000.00'
      },
      {
        startPrice: '2000.00',
        endPrice: '3000.00'
      },
      {
        startPrice: '3000.00',
        endPrice: '6000.00'
      }],
      priceChecked: "all",
      filterBy: false,
      overLayFlag: false
    }
  },
  components: {
    NavHeader,
    NavFooter,
    NavBreader
  },
  methods: {
    getGoodsList(flag) {
      var param = {
        page: this.page,
        pageSize: this.pageSize,
        sort: this.sortFlag ? 1 : -1,
        priceLevel: this.priceChecked
      };
      axios.get("/goods/list", { params: param }).then((value) => {
        var res = value.data;
        this.loading = false;
        if (res.status === "0") {
          if (flag) {
            this.goodsList = this.goodsList.concat(res.result.list);
            if (res.result.count == 0) {
              this.busy = true;
            } else {
              this.busy = false;
            }
          } else {
            this.goodsList = res.result.list;
            this.busy = false;
          }
        } else {
          this.goodsList = [];
        }
      })
    },
    addCart(productId) {
      axios.post("/goods/addCart", { productId: productId })
        .then((res) => {
          var res = res.data;
          if (res.status == 0) {
            alert("添加成功");
            this.mdShowCart = true;
          } else {
            alert("添加失败");
            this.mdShow = true;
          }
        });
    },
    setPriceFilter(index) {
      this.priceChecked = index;
      this.page = 1;
      this.getGoodsList();
    },
    showFilterPop() {
      this.filterBy = true;
      this.overLayFlag = true;
    },
    closePop() {
      this.filterBy = false;
      this.overLayFlag = false;
    },
    sortGoods() {
      this.sortFlag = !this.sortFlag;
      this.page = 1;
      this.getGoodsList();
    },
    defaultSort() {
      this.sortFlag = true;
      this.page = 1;
      this.getGoodsList();
    },
    loadMore() {
      this.busy = true;
      setTimeout(() => {
        this.page++;
        this.getGoodsList(true);
      }, 500)
    }
  },
  mounted() {
    this.getGoodsList();
  }
}
</script>

