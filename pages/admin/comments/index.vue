<!-- страница комментариев  и их модерация-->
<template>
  <no-ssr>
    <!-- переадаем а компонент commentTable массив в пропс thead -->
    <commentTable
      :thead="['Name', 'Text', 'Status', 'Change Statue', 'Delete']"
    >
      <!-- в компоненте  commentTable используем  слот tbody -->
      <tbody slot="tbody">
        <tr v-for="comment in comments" :key="comment.id">
          <td>
            <span>{{ comment.name }}</span>
          </td>
          <td>
            <span>{{ comment.text }}</span>
          </td>
          <td>
            <span v-if="comment.publish" class="status true"> Published </span>
            <span v-else class="status false"> Hiden </span>
          </td>
          <td>
            <span @click="changeComment(comment)" class="link">
              Change Status</span
            >
          </td>
          <td>
            <span @click="deleteComment(comment.id)" class="link">
              Delete
            </span>
          </td>
        </tr>
      </tbody>
    </commentTable>
  </no-ssr>
</template>

<script>
import axios from "axios";
import commentTable from "@/components/Admin/CommentTable.vue";

export default {
  components: { commentTable },
  layout: "admin",
  data() {
    return {
      comments: [],
    }
  },

  mounted () {
   this.loadComments()
  },

  methods: {
    loadComments () {
       axios.get(`https://blog-nuxt-74c4f-default-rtdb.firebaseio.com/comments.json`) //comments.json - это все наши комментарии
      .then((res) => {
        let commentsArrayRes = []
        // Это конструкция для firebase актуальна, так как там все в обьектах,  а нам нужен массив обьектов
        Object.keys(res.data).forEach(el => {
          const comment = res.data[el]  //это конкретный комментарий с именем
          commentsArrayRes.push({...comment, id: el})  //el в данном случае - это вот такие ключи MqcDpGGAuCgFjy23myr каждого коммента 
        })  // на выходе получаем массив обьектов commentsArrayRes
        
        this.comments = commentsArrayRes
      })
    },

    changeComment (comment) {
      comment.publish = !comment.publish  // для изменения статуса у коммента с publish на hiden  и наоборот
      axios.put(`https://blog-nuxt-74c4f-default-rtdb.firebaseio.com/comments/${comment.id}.json`, comment) 
    },

    deleteComment (id) {
      axios.delete(`https://blog-nuxt-74c4f-default-rtdb.firebaseio.com/comments/${id}.json`) 
        .then(res => {this.loadComments()} )  //для рефреша наших комментарием
    },
  },
};

</script>