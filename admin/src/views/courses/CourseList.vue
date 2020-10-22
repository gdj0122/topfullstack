<template>
  <div>
      <h3>视频列表</h3>
      <el-table :data="data.data" border stripe>
        <el-table-column v-for="(field,name) in fields"
          :prop="name"
          :key="field.id"
          :label="field.label"
          :width="field.width">
        </el-table-column>
      </el-table>
      
  </div>
</template>

<script lang="ts">
import { Vue , Component } from "vue-property-decorator";


@Component({})
export default class CourseList extends Vue{

  data = {};
  fields = {
    _id:{label:'ID'},
    name:{label:"名称"},
    cover:{label:"封面图"}
  }

  async fetch () {
    const res = await this.$http.get('courses')
    this.data = res.data
  }
  created(){
    this.fetch()
  }
}
</script>

<style >

</style>