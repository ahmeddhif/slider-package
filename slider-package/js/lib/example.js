var widgets = require('@jupyter-widgets/base');
var _ = require('lodash');


// Custom Model. Custom widgets models must at least provide default values
// for model attributes, including
//
//  - _view_name
//  - _view_module
//  - _view_module_version
//
//  - _model_name
//  - _model_module
//  - _model_module_version
//
//  when different from the base class.

// When serialiazing the entire widget state for embedding, only values that
// differ from the defaults will be specified.
var HelloModel = widgets.DOMWidgetModel.extend({
    defaults: _.extend(_.result(this, 'widgets.DOMWidgetModel.prototype.defaults'), {
        _model_name: 'HelloModel',
        _view_name: 'HelloView',
        _model_module: 'slider-package',
        _view_module: 'slider-package',
        _model_module_version: '0.1.0',
        _view_module_version: '0.1.0',
        
        width: '200',
        height: '200',
        color: 'blue'
    })
});


// Custom View. Renders the widget model.
var HelloView = widgets.DOMWidgetView.extend({
    render: function () {
        //this.el.createElement("div");
        const divWidget = this.el;
        const divNew = document.createElement('canvas');
        const divX = document.createElement('div');
        const divY = document.createElement('div');
        divX.textContent = 0
        divX.textContent = 0
        
        divNew.id = 'canvas';
        const w=this.model.get('width') + "px"
        const h=this.model.get('height') + "px"
        divNew.style.width = w;
        divNew.style.height = h;
        console.log(w);
        console.log(h);
        divNew.style.border = "solid";
        divNew.addEventListener('click', () => {
            var rect = canvas.getBoundingClientRect();
            var x = getMousePos(canvas, event)["x"];     // Get the horizontal coordinate
            var y = getMousePos(canvas, event)["y"];
            drawCoordinates(x, y, this.model.get('color'))
            divX.textContent = `X position is: ${x}`
            divY.textContent = `Y position is: ${y}`
        });
        divWidget.appendChild(divNew);
        divWidget.appendChild(divX);
        divWidget.appendChild(divY);
        function getMousePos(canvas, evt) {
            var rect = canvas.getBoundingClientRect(), // abs. size of element
                scaleX = canvas.width / rect.width,    // relationship bitmap vs. element for X
                scaleY = canvas.height / rect.height;  // relationship bitmap vs. element for Y

            return {
                x: (evt.clientX - rect.left) * scaleX,   // scale mouse coordinates after they have
                y: (evt.clientY - rect.top) * scaleY     // been adjusted to be relative to element
            }
        }
        function drawCoordinates(x, y, color) {
            var pointSize = 3; // Change according to the size of the point.
            var ctx = document.getElementById("canvas").getContext("2d");


            ctx.fillStyle = color; // Red color

            ctx.beginPath(); //Start path
            ctx.arc(x, y, pointSize, 0, Math.PI * 2, true); // Draw a point using the arc function of the canvas with a point structure.
            ctx.fill(); // Close the path and fill.
        }
        

    },
    

});


module.exports = {
    HelloModel: HelloModel,
    HelloView: HelloView
};