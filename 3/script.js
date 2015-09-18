d3.selectAll('.box')
    .on('click',function(){
        d3.select(this)
            .transition()
            .style('background','rgb('+Math.random()*255+','+Math.random()*255+','+Math.random()*255+')');
    })