
import { defineStore } from 'pinia';

export const useArchivosStore = defineStore('archivos', {
  state: () => ({
    archivosEnviados: [] as File[],
  }),
  actions: {
    agregarArchivo(archivo: File) {
      this.archivosEnviados.push(archivo);
    },
  },
});
