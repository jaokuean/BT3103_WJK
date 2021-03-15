import { Bar } from 'vue-chartjs'
import database from '../../firebase.js'

export default {
    extends: Bar,
    data: function () {
        return {
            datapacket: [],
            datacollection: {
                labels: ["Cereal Prawn", "Prawn omelette", "Dry Beef Hor Fun", "Sambal KangKung", "Pork Fried Rice", "Mapo Tofu"],
                datasets: [{
                    label: "",
                    backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#000"],
                    data: [0, 0, 0, 0, 0, 0]
                }]
            },
            options: {
                legend: { display: false },
                title: {
                    display: true,
                    text: 'Total numbers of each dish'
                },
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            min: 0
                        }
                    }]
                }
            }
        }
    },
    methods: {
        fetchItems: function () {
            database
                .collection("orders")
                .get()
                .then(querySnapShot => {
                    querySnapShot.forEach(doc => {
                        this.datapacket = doc.data().order;
                        for (let i = 0; i < this.datapacket.length; i++) {
                            const curr = parseInt(this.datacollection.datasets[0].data[i])
                            const incomingQty = parseInt(this.datapacket[i].qty)
                            this.datacollection.datasets[0].data[i] = curr + incomingQty
                        }
                    })
                    this.renderChart(this.datacollection, this.options)
                })
        }
    },
    created() {
        this.fetchItems()
    }
}
