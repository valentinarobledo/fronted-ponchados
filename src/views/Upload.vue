<template>
	<div class="upload-page">
		<div class="form">
			<div>
			  <b-form-select v-model="selected" :options="options" class="form-control"></b-form-select>
			  </div>
			<b-form-file v-model="file" :state="Boolean(file)" type="file" class="form-control" placeholder="Escoge un archivo" >
    		</b-form-file>
    		
			<b-form-input type="url" placeholder="Insertar url" class="form-control"></b-form-input>
			<button class="btn btn-game">Enviar</button>
			
		</div>
		
	</div>
</template>

<script>
  export default {
    data() {
      return {
        selected: null,
        options: [
          { value: null, text: 'Seleccione un grupo' },
          { value: 'a', text: '10-1' },
          { value: 'b', text: '10-2' },
          { value: { C: '3PO' }, text: '11-1' },
          { value: 'd', text: '11-2'}
        ]
      }
    }
  }
</script>
