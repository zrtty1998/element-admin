<template>
  <div>
    <el-table :data="articles">
      <el-table-column prop="title" label="标题" width="200"> </el-table-column>
      <el-table-column prop="body" label="内容" width="500"> </el-table-column>
      <el-table-column label="操作" align="right">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: [],
    };
  },
  created() {
    this.fetch();
  },
  methods: {
    handleDelete(index, row) {
      let id = row._id;
      this.$http.delete(`articles/${id}`).then((res) => {
        if (res.data.status == true) {
          this.$message({
            message: "删除成功",
            type: "success",
          });
          this.fetch();
        } else {
          this.$message.error('删除失败');
        }
      });
    },
    handleEdit(index, row) {
      this.$router.push(`/articles/${row._id}/edit`)
    },
    fetch() {
      this.$http.get("articles").then((res) => {
        this.articles = res.data;
      });
    },
  },
};
</script>