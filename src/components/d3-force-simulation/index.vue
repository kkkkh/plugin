<template>
  <div>
    <div id="chart"></div>
  </div>
</template>

<script type="text/ecmascript-6">
import * as d3 from 'd3'
// var d3 = Object.assign({}, require('d3-force'), require('d3-drag'), require('d3-transition'), require('d3-selection'))
export default {
    name: 'chart',
    data() {
        return {
            forceSimulation: null,
            linksText: null,
            links: null,
            edges: null,
            rect_g: null,
            rects: null,
            gs: null,
            text: null,
            data: {
                nodes: [
                ],
                edges: [
                ]
            },
            config: {
                width: 1300,
                height: 800,
                r: 35,
                scaleExtent: [0.5, 1.5],
                deviation: 10, //偏移量
                // linkSrc: 30, // 划线时候的弧度
                marge: {
                    top: 10,
                    bottom: 10,
                    left: 10,
                    right: 10
                },
                circle: {
                    radius: 50,
                    color: ['#e81737', '#0b6ccd', '#e7b119'],
                    // color: ['#FF0066', '#0066FF', '#FF9966'],
                    strokeSolor: ['#f37189', '#7ebeee', '#f6ce5f'],
                    strokeWidth: 5
                },
                name: {
                    lineHeight: 12, // 根据字体大小设置
                    lineMargin: 2
                },
                marker: {
                    width: 6
                }
            },
            dependsNode: [],
            dependsLinkAndText: []
        }
    },
    computed: {},
    methods: {
        reset(data) {
            // this.forceSimulation.restart()
            this.SVG.remove()
            this.init(data)
        },
        init(data) {
            this.data = data
            this.SVG = d3
                .select('#chart')
                .append('svg')
                .attr('width', this.config.width)
                .attr('height', this.config.height)
                .call(
                    d3
                        .zoom()
                        .scaleExtent(this.config.scaleExtent)
                        .on('zoom', () => {
                            this.relMap_g.attr('transform', d3.event.transform)
                        })
                )
            this.relMap_g = this.SVG.append('g').attr('transform', 'translate(' + this.config.marge.top + ',' + this.config.marge.left + ')')
            //设置一个color的颜色比例尺，为了让不同的扇形呈现不同的颜色
            this.forceSimulation = d3
                .forceSimulation() //创建一个力学模拟器
                .force(
                    'link',
                    d3
                        .forceLink()
                        .id(d => d.id)
                        .distance(function(d) {
                            //每一边的长度
                            return d.value * 10
                        })
                )
                .force('charge', d3.forceManyBody().strength(-300)) //电荷力模型
                .force(
                    'center',
                    d3
                        .forceCenter()
                        .x(this.config.width / 2)
                        .y(this.config.height / 2)
                )
                .force(
                    'collide',
                    d3
                        .forceCollide(110) //创建一个新的圆的碰撞检测-节点半径值
                        .strength(0.2) //碰撞强度
                        .iterations(10) //迭代次数
                )
                .alphaDecay(0.0228)
            //生成节点数据
            this.forceSimulation.nodes(this.data.nodes).on('tick', this.ticked) //这个函数很重要，后面给出具体实现和说明
            //生成边数据
            this.forceSimulation.force('link').links(this.data.edges)
            //箭头
            this.SVG.append('defs')
                .append('marker')
                .attr('id', 'marker')
                .attr('markerWidth', '12') //marker视窗的宽
                .attr('markerHeight', '12') //marker视窗的高
                .attr('refX', this.config.circle.radius + 3 * this.config.circle.strokeWidth) //refX和refY，指的是图形元素和marker连接的位置坐标
                .attr('refY', 6)
                .attr('orient', 'auto') //orient="auto"设置箭头的方向为自动适应线条的方向
                .attr('markerUnits', 'userSpaceOnUse') // userSpaceOnUse marker是否进行缩放 ,默认值是strokeWidth,会缩放
                .append('path')
                .attr('d', 'M 0 0 12 6 0 12Z') //箭头的路径 从 （0,0） 到 （12,6） 到（0,12）
                .attr('fill', '#666')
            //箭头二 --- down 和 up 对应的箭头
            this.SVG.append('defs')
                .append('marker')
                .attr('id', 'deviation-marker')
                .attr('markerWidth', '12') //marker视窗的宽
                .attr('markerHeight', '12') //marker视窗的高
                //差别点
                .attr('refX', () => {
                    const rd = this.config.circle.radius - Math.sqrt(Math.pow(this.config.circle.radius, 2) - Math.pow(this.config.deviation, 2))
                    return this.config.circle.radius + 3 * this.config.circle.strokeWidth - rd
                }) //refX和refY，指的是图形元素和marker连接的位置坐标
                .attr('refY', 6)
                .attr('orient', 'auto') //orient="auto"设置箭头的方向为自动适应线条的方向
                .attr('markerUnits', 'userSpaceOnUse') // userSpaceOnUse marker是否进行缩放 ,默认值是strokeWidth,会缩放
                .append('path')
                .attr('d', 'M 0 0 12 6 0 12Z') //箭头的路径 从 （0,0） 到 （12,6） 到（0,12）
                .attr('fill', '#666')
            //绘制边
            this.edges = this.relMap_g
                .selectAll('g.edge')
                .data(this.data.edges)
                .enter()
                .append('g')
                .style('cursor', 'pointer')
                .style('padding', 20)
                .attr('class', 'edge')
                .on('mouseenter', function() {
                    d3.select(this)
                        .select('g.rect_g')
                        .transition()
                        .style('opacity', 1)
                        .select('line')
                        .transition()
                        .attr('stroke', '#666')
                })
                .on('mouseleave', function() {
                    d3.select(this)
                        .transition()
                        .select('g.rect_g')
                        .style('opacity', 0)
                        .select('line')
                        .transition()
                        .attr('stroke', '#ccc')
                })
            this.links = this.edges
                .append('line')
                .attr('stroke', '#ccc')
                .attr('stroke-width', 3)
                .style('marker-end', d => {
                    return d.position === 'middle' ? 'url(#marker)' : 'url(#deviation-marker)'
                })

            //边上文字
            this.rect_g = this.edges
                .append('g')
                .attr('class', 'rect_g')
                .style('opacity', 0)
            this.rects = this.rect_g
                .append('rect')
                .attr('x', d => {
                    const length = (d.debitTotalAmount + '').length
                    return (-(length + 1.5) * 12) / 2
                })
                .attr('y', -16)
                .attr('width', d => {
                    const length = (d.debitTotalAmount + '').length
                    return (length + 1.5) * 12
                })
                .attr('height', 24)
                .attr('fill', '#fff')
                .attr('stroke', '#ddd')

            this.linksText = this.rect_g
                .insert('text')
                .attr('text-anchor', 'middle') // <text>文本中轴对齐方式居中  start | middle | end
                .style('font-size', 14)
                .attr('class', 'linksText')
                .style('background-color', '#fff')
                .text(d => {
                    return d.debitTotalAmount + '(元)'
                })
            //建立用来放在每个节点和对应文字的分组<g>
            this.gs = this.relMap_g
                .selectAll('.circleBox')
                .data(this.data.nodes)
                .enter()
                .append('g')
                .attr('class', 'circleBox')
                .attr('transform', function(d) {
                    var cirX = d.x
                    var cirY = d.y
                    return 'translate(' + cirX + ',' + cirY + ')'
                })
                .call(
                    d3
                        .drag()
                        .on('start', this.started)
                        .on('drag', this.dragged)
                        .on('end', this.ended)
                )
                .on('mouseover', (d, i, ele) => {
                    const self = ele[i]
                    d3.select(self)
                        .select('circle')
                        .transition(10)
                        .attr('stroke-width', '8')
                        .attr('r', 56)
                    // if (that.config.isHighLight) {
                    this.highlightObject(d)
                    // }
                })
                .on('mouseout', (d, i, ele) => {
                    const self = ele[i]
                    d3.select(self)
                        .select('circle')
                        .transition(10)
                        .attr('stroke-width', '4')
                        .attr('r', 50)
                    // if (that.config.isHighLight) {
                    this.highlightOff()
                    // }
                })
            //绘制节点
            this.gs
                .append('circle')
                .attr('r', this.config.circle.radius)
                .attr('stroke', d => this.config.circle.strokeSolor[d.group - 1])
                .attr('stroke-width', this.config.circle.strokeWidth)
                .attr('fill', d => {
                    return this.config.circle.color[d.group - 1]
                })
                .style('cursor', 'pointer')

            //文字
            this.text = this.gs
                .append('text')
                .attr('fill', '#ffffff')
                .style('font-size', 12)
            this.text
                .selectAll('tspan')
                .data(data => {
                    const startMax = 7
                    const thenMax = 13
                    const nextMax = 19
                    //文字布局计算
                    //样式有变更，请在此修改配置项
                    const namelength = data.name.length
                    if (namelength <= startMax) {
                        return [{ name: data.name, length: 1 }]
                    } else if (namelength <= thenMax) {
                        const num = Math.floor(namelength / 2)
                        return [{ name: data.name.slice(0, num), length: 2 }, { name: data.name.slice(-(num + 1)), length: 2 }]
                    } else {
                        //if (namelength <= 19) 或 更多
                        return [{ name: data.name.slice(0, startMax - 1), length: 3 }, { name: data.name.slice(startMax - 1, thenMax), length: 3 }, { name: data.name.slice(thenMax, nextMax), length: 3 }]
                    }
                })
                .enter()
                .append('tspan')
                .attr('x', val => {
                    const lineHeight = this.config.name.lineHeight
                    return -((val.name.length * lineHeight) / 2)
                })
                .attr('y', (val, index) => {
                    const length = val.length
                    const lineHeight = this.config.name.lineHeight
                    const lineMargin = this.config.name.lineMargin
                    if (length == 1) {
                        return lineHeight / 2
                    } else if (length == 2) {
                        if (index == 0) {
                            return -lineMargin
                        } else if (index == 1) {
                            return lineHeight + lineMargin
                        }
                    } else if (length == 3) {
                        if (index == 0) {
                            return -(lineHeight / 2 + lineMargin)
                        } else if (index == 1) {
                            return lineHeight / 2
                        } else if (index == 2) {
                            return lineHeight * 1.5 + lineMargin
                        }
                    }
                })
                .text(function(d) {
                    return d.name
                })
        },
        highlightOff() {
            this.dependsNode = []
            this.dependsLinkAndText = []
            this.SVG.selectAll('.circleBox')
                .transition()
                .style('opacity', 1)
            // 隐藏线
            this.SVG.selectAll('.edge')
                .transition()
                .style('opacity', 1)
            this.SVG.selectAll('.rect_g')
                .transition()
                .style('opacity', 0)
        },
        highlightObject(obj) {
            // debugger
            var objIndex = obj.id
            this.dependsNode = this.dependsNode.concat([objIndex])
            this.dependsLinkAndText = this.dependsLinkAndText.concat([objIndex])
            this.data.edges.forEach(lkItem => {
                if (objIndex == lkItem['source']['id']) {
                    this.dependsNode = this.dependsNode.concat([lkItem.target.id])
                } else if (objIndex == lkItem['target']['id']) {
                    this.dependsNode = this.dependsNode.concat([lkItem.source.id])
                }
            })
            // 隐藏节点
            this.SVG.selectAll('.circleBox')
                .filter(d => {
                    return !~this.dependsNode.indexOf(d.id)
                })
                .transition()
                .style('opacity', 0.1)
            // 隐藏线
            this.SVG.selectAll('.edge')
                .filter(d => {
                    return !~this.dependsLinkAndText.indexOf(d.source.id) && !~this.dependsLinkAndText.indexOf(d.target.id)
                })
                .transition()
                .style('opacity', 0.1)
            this.SVG.selectAll('.rect_g')
                .filter(d => {
                    return ~this.dependsLinkAndText.indexOf(d.source.id) || ~this.dependsLinkAndText.indexOf(d.target.id)
                })
                .transition()
                .style('opacity', 1)
        },
        ticked() {
            this.links
                .attr('x1', d => {
                    // console.log(d)
                    return d.position === 'middle' ? d.source.x : this.deviationX(d, 'source')
                })
                .attr('y1', d => {
                    return d.position === 'middle' ? d.source.y : this.deviationY(d, 'source')
                    // return d.source.y
                })
                .attr('x2', d => {
                    return d.position === 'middle' ? d.target.x : this.deviationX(d, 'target')
                    // return d.target.x
                })
                .attr('y2', d => {
                    return d.position === 'middle' ? d.target.y : this.deviationY(d, 'target')
                    // return d.target.y
                })
            // this.edges.attr('transform', d => {
            //     return this.getTransform(d.source, d.target, this.getDis(d.source, d.target))
            // })
            // this.links.attr('d', d => {
            //     return 'M' + this.config.linkSrc + ',' + 0 + ' L' + this.getDis(d.source, d.target) + ',0'
            // })
            this.linksText
                // .attr('x', d => {
                //     return (d.source.x + d.target.x) / 2
                //     // const value = (d.source.x + d.target.x) / 2
                //     // return this.deviation(value, d.position)
                // })
                // .attr('y', d => {
                //     return (d.source.y + d.target.y) / 2
                //     //     // const value = (d.source.y + d.target.y) / 2
                //     //     // return this.deviation(value, d.position)
                //     //     // return this.getDis(d.source, d.target) / 2
                // })
                .attr('transform', d => {
                    if (d.target.y !== d.source.y) {
                        var deg = this.transformRotate(d.source, d.target)
                        var { x, y } = this.getCenter(d)
                        return `translate(${x},${y}) rotate(${deg})`
                        // return `rotate(${deg})`
                    } else {
                        return 'rotate(0)'
                    }
                })
            this.rects.attr('transform', d => {
                if (d.target.y !== d.source.y) {
                    var deg = this.transformRotate(d.source, d.target)
                    var { x, y } = this.getCenter(d)
                    // const reactX = x - ((d.debitTotalAmount + '').length * 12) / 2
                    return `translate(${x},${y}) rotate(${deg})`
                    // return `rotate(${deg})`
                } else {
                    return 'rotate(0)'
                }
            })
            this.gs.attr('transform', function(d) {
                return 'translate(' + d.x + ',' + d.y + ')'
            })
        },
        deviationX(d, type) {
            // 目前设定的偏移量 设为10
            //因为 无论up还是down 其实都是相对的，算法的一致的
            //不可能一根线既是up也是down
            const dy = d.target.y - d.source.y
            const dx = d.target.x - d.source.x
            const z = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2))
            const xo = Math.abs((dy / z) * this.config.deviation)
            if (dy < 0) {
                return d[type].x - xo
            } else if (dy > 0) {
                return d[type].x + xo
            } else if (dy === 0) {
                if (dx > 0) {
                    return d[type].x - xo
                } else if (dx < 0) {
                    return d[type].x + xo
                }
            }
        },
        deviationY(d, type) {
            // 目前设定的偏移量 设为10
            //因为 无论up还是down 其实都是相对的，算法的一致的
            //不可能一根线既是up也是down
            const dy = d.target.y - d.source.y
            const dx = d.target.x - d.source.x
            const z = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2))
            const yo = Math.abs((dx / z) * this.config.deviation)
            if (dx < 0) {
                return d[type].y + yo
            } else if (dx > 0) {
                return d[type].y - yo
            } else if (dx === 0) {
                if (dy > 0) {
                    return d[type].y + yo
                } else if (dy < 0) {
                    return d[type].y - yo
                }
            }
        },
        deviationCenter(d) {
            const dy = d.target.y - d.source.y
            const dx = d.target.x - d.source.x
            const z = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2))
            const xo = Math.abs((dy / z) * this.config.deviation)
            let xDeviation, yDeviation
            if (dy < 0) {
                xDeviation = -xo
            } else if (dy > 0) {
                xDeviation = xo
            } else if (dy === 0) {
                if (dx > 0) {
                    xDeviation = -xo
                } else if (dx < 0) {
                    xDeviation = +xo
                }
            }
            const yo = Math.abs((dx / z) * this.config.deviation)
            if (dx < 0) {
                yDeviation = yo
            } else if (dx > 0) {
                yDeviation = -yo
            } else if (dx === 0) {
                if (dy > 0) {
                    yDeviation = yo
                } else if (dy < 0) {
                    yDeviation = yo
                }
            }
            return { xDeviation, yDeviation }
        },
        getCenter(d) {
            //思路一
            //非middle线条需要重新计算起点（x1,y1）和终点（x2,y2），再计算中点
            //思路二
            //在计算出来的中点位置进行偏移
            //较少计算量，采用思路二
            const distanceX = d.target.x - d.source.x //x坐标之间的距离
            const centerX = d.target.x - distanceX / 2 // 中心点x坐标
            const distanceY = d.target.y - d.source.y //y坐标之间的距离
            const centerY = d.target.y - distanceY / 2 // 中心点y坐标
            let x, y
            //计算不同情况是因为translate要根据当前位置位移
            if ((d.target.x < d.source.x && d.target.y < d.source.y) || (d.target.x > d.source.x && d.target.y > d.source.y) || distanceX === 0) {
                y = centerY + 3
                x = centerX - 3
            } else {
                y = centerY + 3
                x = centerX + 3
            }
            if (d.position === 'middle') {
                return { x, y }
            } else {
                //在计算出来的中点位置进行偏移
                const { xDeviation, yDeviation } = this.deviationCenter(d)
                return {
                    x: x + xDeviation,
                    y: y + yDeviation
                }
            }
        },
        transformRotate(source, target) {
            var r = Math.atan((target.y - source.y) / (target.x - source.x))
            // console.log(r)
            // if (target.x > source.x) {
            //     if (target.y > source.y) {
            //         r = Math.atan((target.y - source.y) / (target.x - source.x))
            //     } else {
            //         r = Math.atan((source.y - target.y) / (target.x - source.x))
            //         r = -r
            //     }
            // } else {
            //     if (target.y > source.y) {
            //         r = Math.atan((target.y - source.y) / (source.x - target.x))
            //         // r = Math.PI - r
            //     } else {
            //         r = Math.atan((source.y - target.y) / (source.x - target.x))
            //         // r -= Math.PI
            //     }
            // }
            // return 'translate(' + source.x + ',' + source.y + ')rotate(' + r + ')'
            // console.log(r * (180 / Math.PI))
            return r * (180 / Math.PI)
        },
        dragged(d) {
            // console.log(d3.event)
            d.fx = d3.event.x
            d.fy = d3.event.y
        },
        started(d) {
            if (!d3.event.active) {
                this.forceSimulation.alphaTarget(0.8).restart() //设置衰减系数，对节点位置移动过程的模拟，数值越高移动越快，数值范围[0，1]
            }
            d.fx = d.x
            d.fy = d.y
        },
        ended(d) {
            if (!d3.event.active) {
                this.forceSimulation.alphaTarget(0)
            }
            d.fx = null
            d.fy = null
        }
        //绘制饼状图
        // var arc_generator = d3
        //     .arc()
        //     .innerRadius(0)
        //     .outerRadius(30)
        // let arcData = d3.pie()([100, 100, 100])
        // let circleData = d3.pie()([100])
        // let arc = gs
        //     .selectAll('.arc')
        //     .data(d => {
        //         // console.log(arcData)
        //         return d.group == '3' ? arcData : circleData
        //     })
        //     .enter()
        //     .append('g')
        //     .append('path')
        //     .attr('d', function(d) {
        //         // console.log(d)
        //         // return d3.arc(d)
        //         return arc_generator(d)
        //     })
        //     .attr('fill', (d, i) => {
        //         return this.config.circle.color[i]
        //     })
    }
}
</script>

<style lang="less"></style>
