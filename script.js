const { createApp } = Vue;
const { createVuetify } = Vuetify;

const vuetify = createVuetify({
    theme: {
        defaultTheme: 'light'
    }
});

createApp({
    data() {
        return {
            conversaciones: [],
            activeTab: 1
        }
    },
    async mounted() {
        try {
            const response = await fetch('conversaciones_viajes.json');
            const data = await response.json();
            this.conversaciones = data.conversaciones;
            // Establecer la primera conversación como activa
            if (this.conversaciones.length > 0) {
                this.activeTab = this.conversaciones[0].id;
            }
        } catch (error) {
            console.error('Error cargando las conversaciones:', error);
            // Datos de fallback en caso de que no se pueda cargar el JSON
            this.conversaciones = [
                {
                    id: 1,
                    titulo: "Hoteles en Madrid",
                    mensajes: [
                        {
                            rol: "user",
                            texto: "Hoteles en madrid",
                            tieneBoard: false
                        },
                        {
                            rol: "asistente",
                            texto: "¡Hola! Me encanta ayudarte a encontrar el hotel perfecto en Madrid. Para darte las mejores opciones, necesito conocer algunos detalles de tu viaje. ¿Cuándo planeas viajar a Madrid?",
                            tieneBoard: false
                        }
                    ]
                }
            ];
            this.activeTab = 1;
        }
    }
}).use(vuetify).mount('#app');
