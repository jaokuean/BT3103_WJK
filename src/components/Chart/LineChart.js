import { Line } from 'vue-chartjs'
import axios from 'axios'

export default {
    extends: Line,
    data: function () {
        return {
            datacollection: {
                labels: [],
                datasets: [{
                    data: [],
                    label: "West",
                    borderColor: "#3e95cd",
                    fill: false
                }, {
                    data: [],
                    label: "National",
                    borderColor: "#8e5ea2",
                    fill: false
                }, {
                    data: [],
                    label: "East",
                    borderColor: "#3cba9f",
                    fill: false
                }, {
                    data: [],
                    label: "Central",
                    borderColor: "#e8c3b9",
                    fill: false
                }, {
                    data: [],
                    label: "South",
                    borderColor: "#c45850",
                    fill: false
                }, {
                    data: [],
                    label: "North",
                    borderColor: "#000",
                    fill: false
                }]
            },
            options: {
                legend: { display: true },
                title: {
                    display: true,
                    text: 'PSI Twenty Four Hour (By Region)'
                },
                responsive: true,
                maintainAspectRatio: false
            }
        }
    },
    methods: {
        fetchItems: function () {
            axios.get(`https://api.data.gov.sg/v1/environment/psi?date=2021-02-22`)
                .then(response => {
                    response.data.items.forEach(data => {
                        this.datacollection.labels.push(data.timestamp)
                        this.datacollection.datasets[0].data.push(data.readings.psi_twenty_four_hourly.west)
                        this.datacollection.datasets[1].data.push(data.readings.psi_twenty_four_hourly.national)
                        this.datacollection.datasets[2].data.push(data.readings.psi_twenty_four_hourly.east)
                        this.datacollection.datasets[3].data.push(data.readings.psi_twenty_four_hourly.central)
                        this.datacollection.datasets[4].data.push(data.readings.psi_twenty_four_hourly.south)
                        this.datacollection.datasets[5].data.push(data.readings.psi_twenty_four_hourly.north)
                    })
                    this.renderChart(this.datacollection, this.options)
                })
        }
    },
    created() {
        this.fetchItems()
    }
}