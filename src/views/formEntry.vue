<template>
  <div>
  <Dropdown
      v-model="userSelected"
      :options="user"
      optionLabel="name"
      placeholder="Select a user"
    />
    <Dropdown
      v-model="meteoSelected"
      :options="meteo"
      optionLabel="name"
      placeholder="Select a meteo"
    />
    <Button label="Submit" icon="pi pi-check" iconPos="right" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      meteoSelected: null,
      user:[],
      meteo:[]
    };
  },

  methods: {
    async postData() {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: "Vue POST Request Example" }),
      };
      fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
        .then((response) => response.json())
        .then((data) => (this.entryId = data.id));
    },
  },

};
</script>
