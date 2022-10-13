<template>
  <div>
    <router-link :to="{ path: 'form' }"><Button>Donner sa météo</Button></router-link>
    <DataTable :value="entries" responsiveLayout="scroll">
      <Column field=user.nom header="Nom"></Column>
      <Column field=meteo.nom header="Meteo"></Column>
    </DataTable>
  </div>
</template>

<script>
export default {
  data() {
    return {

    };
  },

  methods: {
    async getData() {
      try {
        let response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        this.posts = await response.json();
      } catch (error) {
        console.log(error);
      }
    },
  },

  created() {
    this.getData();
  },
};
</script>
