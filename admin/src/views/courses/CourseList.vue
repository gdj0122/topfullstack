<template>
  <div>
      <h3>视频列表</h3>
      <el-table :data="data.data" border stripe>
        <el-table-column v-for="field in fields"
          :prop="field.id"
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
    _id:{},
    name:{},
    cover:{}
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