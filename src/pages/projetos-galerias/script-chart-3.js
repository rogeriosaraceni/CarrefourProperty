am4core.ready(function () {
    am4core.useTheme(am4themes_animated);

    // Create chart instance
    var chart = am4core.create("chartdiv-abl-coordenador", am4charts.XYChart);
    chart.maskBullets = false;
    chart.logo.disabled = true;

    // Add data
    chart.data = [
        {
            indicador: "Wilson Fernandes",
            ocupado: 125014,
            vago: 20858,
        },
        {
            indicador: "Thaiz Magnino",
            ocupado: 51475,
            vago: 7459,
        },
        {
            indicador: "Thiago Zupo",
            ocupado: 147249,
            vago: 7821,
        },
        {
            indicador: "Vinícius Guimarães",
            ocupado: 92228,
            vago: 6045,
        },
    ];

    // Create axes
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "indicador";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 10;
    categoryAxis.renderer.grid.template.disabled = true;
    categoryAxis.renderer.labels.template.fontSize = 13;
    categoryAxis.renderer.labels.template.horizontalCenter = "right";
    categoryAxis.renderer.labels.template.verticalCenter = "middle";
    categoryAxis.renderer.labels.template.rotation = -45;

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.renderer.labels.template.fontSize = 14;
    //valueAxis.renderer.labels.template.disabled = true;
    valueAxis.renderer.grid.template.disabled = true;

    function createSeries(field, name, stacked, color) {
        var series = chart.series.push(new am4charts.ColumnSeries());
        series.name = name;
        series.dataFields.valueY = field;
        series.dataFields.categoryX = "indicador";
        series.sequencedInterpolation = true;
        series.stacked = stacked;
        series.columns.template.tooltipText = "[bold]{name}[/]\n[font-size:14px]{categoryX}: {valueY}";

        series.columns.template.width = am4core.percent(75);
        series.columns.template.fill = color;
        series.stroke = color;

        var labelBullet = series.bullets.push(new am4charts.LabelBullet());
        labelBullet.label.text = "{valueY}";
        labelBullet.locationY = 0.5;
        labelBullet.fontSize = 13;

        return series;
    }

    createSeries("ocupado", "Ocupado", true, am4core.color("#4472c4"));
    createSeries("vago", "Vago", true, am4core.color("#ed7d31"));

    // Legend
    chart.legend = new am4charts.Legend();

    var markerTemplate = chart.legend.markers.template;
    markerTemplate.width = 16;
    markerTemplate.height = 16;
});
