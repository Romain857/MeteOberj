<template>
  <div id="table">
    <router-link :to="{ path: 'form' }"><Button>Donner sa météo</Button></router-link>
    <button class="btn btn-sm btn-primary" @click="getAllData">
      Update
    </button>
    <div id="getAll" v-if="getResult" class="alert alert-secondary mt-2" role="alert">
          <pre>{{ getResult }}</pre>
        </div>
    <DataTable :value="entries" responsiveLayout="scroll">
      <Column field=user.prenom header="Prenom"></Column>
      <Column field=user.nom header="Nom"></Column> 
      <Column field=meteo.nom header="Meteo"></Column>
      <Column field=date header="Date"></Column>
    </DataTable>
  </div>
</template>

<script>
const baseURL = "http://127.0.0.1:8000/entries";
export default {
  name: "App",
  data() {
    return {
      posts: [],
      getResult: null,
    };
  },
  
  methods: {
    fortmatResponse(res) {
      return JSON.stringify(res, null, 2);
    },
    async getData() {
      try {
        let response = await fetch("http://127.0.0.1:8000/entries");
        this.entries = await response.json();
      } catch (error) {
        console.log(error);
      }
    },
    async getAllData() {
      try {
        const res = await fetch(`${baseURL}`);

        if (!res.ok) {
          const message = `An error has occured: ${res.status} - ${res.statusText}`;
          throw new Error(message);
        }

        const data = await res.json();

        const result = {
          status: res.status + "-" + res.statusText,
          headers: {
            "Content-Type": res.headers.get("Content-Type"),
            "Content-Length": res.headers.get("Content-Length"),
          },
          length: res.headers.get("Content-Length"),
          data: data,
        };

        this.getResult = this.fortmatResponse(result);
      } catch (err) {
        this.getResult = err.message;
      }
    },
  },
  created() {
    this.getData();
  },
  clearGetOutput() {
      this.getResult = null;
    },
};
</script>