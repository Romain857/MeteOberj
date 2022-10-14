<template>
  <div>
  <Dropdown
      v-model="userSelected"
      :options="users"
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
      users: [
			{name: 'Yohannd'},
			{name: 'Gabrielf'},
			{name: 'Antoined'},
			{name: 'Erwanl'},
			{name: 'Dorianc'}
		],
      meteo:[{name: 'Ensoleillé'},
			{name: 'Eclaircie'},
			{name: 'Nuageux'},
			{name: 'Pluvieux'},
			{name: 'Orageux'}]
    };
  },

  methods: {
  },

};
</script>
