<template>
    <canvas ref="myChart"></canvas>
</template>

<script>
import { Chart } from 'chart.js/auto';

export default {
    name: 'LineChart',
    props: [
        'in_labals',
        'in_chartD',
        'in_mean'
    ],
    data() {
        return {
            chartData: {
                labels: this.in_labals,
                datasets: [{
                    label: this.in_mean,
                    data: this.in_chartD,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 2
                }]
            },
            chart: null,
        };
    },
    mounted() {
        this.createChart();
    },
    methods: {
        createChart() {
            const ctx = this.$refs.myChart.getContext('2d');
            this.chartData = new Chart(ctx, {
                type: 'line',
                data: this.chartData,
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        },
    }
};
</script>

<style>
/* 可以添加样式来调整图表在组件中的显示效果 */
</style>