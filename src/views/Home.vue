<template>
  <div class="home">
    <chome @routerto="search"></chome>
    <tabbox @indx="indx"></tabbox>
    <tab :index="tabindx" :items="items" v-show="items.length"></tab>
    <list>
		<template v-slot:lef> 
			
		</template>
		<template v-slot:rig> 
			
		</template>
	</list>
  </div>
</template>

<script>
import { gethome, getmode } from "../assets/https.js";
import list from "../components/homelist.vue";
import tabbox from "../components/tabbox.vue";
import chome from "../components/c_home.vue";
import { onMounted, watch, ref, reactive, toRefs, computed } from "vue";
import tab from "../components/tab.vue";
import { useRoute, useRouter } from "vue-router";
export default {
  name: "Home",
  components: {
    chome,
    tabbox,
    list,
    tab,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const tab = reactive({
      //tab的标签
      0: [],
      1: ["推荐","MAD·AMV","MMD·3D","短片·手书·配音","手办·模玩","特摄","综合",],
      2: ["推荐", "连载动画", "完结动画", "资讯", "官方延伸"],
      3: ["推荐","国产动画","国产原创相关","布袋戏","动态漫·广播剧","资讯",],
      4: ["推荐","原创音乐","翻唱","VOCALOID·UTAU","电音","演奏","MV","音乐现场","音乐综合",],
    });
    let tabindx = ref(0); //tab-index的下表
    // 获取主tab的下标
    let indx = (e) => {
      tabindx.value = e;
	   console.log(items);
    };
    function search() {
      router.push("/search");
      console.log(router);
    }
    const items = computed(() => {
		 console.log(tab[tabindx.value].length);
      return tab[tabindx.value];
    });
    // watch(() => {
     
    // });
    onMounted: {
      // gethome().then(res=>{
      // 	console.log(res);
      // })
    }
    return { search, indx, tabindx, items };
  },
};
</script>
<style lang="less" scoped>

	
</style>
