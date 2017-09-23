/**
* echarts.helper.js - WhalePHP框架echarts图表生成辅助组件
* Written by 行者 
* Date: 2017年06月01日
* @author 行者
* @version 0.0.1
**/
if (typeof WhalePHP === "undefined")WhalePHP = {};
WhalePHP.Echarts = (function () {
	var OpenFunc = {}
	var opt = {}
	
	// 
	var testOption = {
			// 饼状图
			'pie':{
				title : {
					text: '某站点用户访问来源',
					//subtext: '纯属虚构',
					x:'center'
				},
				tooltip : {
					trigger: 'item',
					formatter: "{a} <br/>{b} : {c} ({d}%)"
				},
				legend: {
					orient: 'vertical',
					left: 'left',
					data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
				},
				series : [
					{
						name: '访问来源',
						type: 'pie',
						radius : '55%',
						center: ['50%', '60%'],
						data:[
							{value:335, name:'直接访问'},
							{value:310, name:'邮件营销'},
							{value:234, name:'联盟广告'},
							{value:135, name:'视频广告'},
							{value:1548, name:'搜索引擎'}
						],
						itemStyle: {
							emphasis: {
								shadowBlur: 10,
								shadowOffsetX: 0,
								shadowColor: 'rgba(0, 0, 0, 0.5)'
							}
						}
					}
				]
			},
			
			// 基础雷达图
			'radar': {
			    title: {
			        text: '基础雷达图'
			    },
			    tooltip: {},
			    legend: {
			    	left: 'left',
			        data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
			    },
			    radar: {
			        // shape: 'circle',
			        name: {
			            textStyle: {
			                color: '#fff',
			                backgroundColor: '#999',
			                borderRadius: 3,
			                padding: [3, 5]
			           }
			        },
			        indicator: [
			           { name: '销售（sales）', max: 6500},
			           { name: '管理（Administration）', max: 16000},
			           { name: '信息技术（Information Techology）', max: 30000},
			           { name: '客服（Customer Support）', max: 38000},
			           { name: '研发（Development）', max: 52000},
			           { name: '市场（Marketing）', max: 25000}
			        ]
			    },
			    series: [{
			        name: '预算 vs 开销（Budget vs spending）',
			        type: 'radar',
			        // areaStyle: {normal: {}},
			        data : [
			            {
			                value : [4300, 10000, 28000, 35000, 50000, 19000],
			                name : '预算分配（Allocated Budget）'
			            },
			             {
			                value : [5000, 14000, 28000, 31000, 42000, 21000],
			                name : '实际开销（Actual Spending）'
			            }
			        ]
			    }]
			},
			
			// 柱状图
			'bar':{
			    tooltip : {
			        trigger: 'axis',
			        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
			            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
			        }
			    },
			    toolbox: {
			        feature: {
			            magicType: {
			                type: ['stack', 'tiled']
			            },
			            dataView: {}
			        }
			    },
			    legend: {
			        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎','百度','谷歌','必应','其他']
			    },
			    grid: {
			        left: '3%',
			        right: '4%',
			        bottom: '3%',
			        containLabel: true
			    },
			    xAxis : [
			        {
			            type : 'category',
			            data : ['周一','周二','周三','周四','周五','周六','周日']
			        }
			    ],
			    yAxis : [
			        {
			            type : 'value'
			        }
			    ],
			    series : [
			        {
			            name:'直接访问',
			            type:'bar',
			            data:[320, 332, 301, 334, 390, 330, 320]
			        },
			        {
			            name:'邮件营销',
			            type:'bar',
			            stack: '广告',
			            data:[120, 132, 101, 134, 90, 230, 210]
			        },
			        {
			            name:'联盟广告',
			            type:'bar',
			            stack: '广告',
			            data:[220, 182, 191, 234, 290, 330, 310]
			        },
			        {
			            name:'视频广告',
			            type:'bar',
			            stack: '广告',
			            data:[150, 232, 201, 154, 190, 330, 410]
			        },
			        {
			            name:'搜索引擎',
			            type:'bar',
			            data:[862, 1018, 964, 1026, 1679, 1600, 1570],
			            markLine : {
			                lineStyle: {
			                    normal: {
			                        type: 'dashed'
			                    }
			                },
			                data : [
			                    [{type : 'min'}, {type : 'max'}]
			                ]
			            }
			        },
			        {
			            name:'百度',
			            type:'bar',
			            barWidth : 5,
			            stack: '搜索引擎',
			            data:[620, 732, 701, 734, 1090, 1130, 1120]
			        },
			        {
			            name:'谷歌',
			            type:'bar',
			            stack: '搜索引擎',
			            data:[120, 132, 101, 134, 290, 230, 220]
			        },
			        {
			            name:'必应',
			            type:'bar',
			            stack: '搜索引擎',
			            data:[60, 72, 71, 74, 190, 130, 110]
			        },
			        {
			            name:'其他',
			            type:'bar',
			            stack: '搜索引擎',
			            data:[62, 82, 91, 84, 109, 110, 120]
			        }
			    ]
			},
			
			// 折线图
			'line':{
			    title: {
			        text: '未来一周气温变化',
			        //subtext: '纯属虚构'
			    },
			    tooltip: {
			        trigger: 'axis'
			    },
			    legend: {
			        data:['最高气温','最低气温']
			    },
			    toolbox: {
			        show: true,
			        feature: {
			            dataZoom: {
			                yAxisIndex: 'none'
			            },
			            dataView: {readOnly: false},
			            magicType: {type: ['line', 'bar']},
			            restore: {},
			            saveAsImage: {}
			        }
			    },
			    xAxis:  [{
			        type: 'category',
			        boundaryGap: false,
			        data: ['周一','周二','周三','周四','周五','周六','周日']
			    }],
			    yAxis: {
			        type: 'value',
			        axisLabel: {
			            //formatter: '{value} °C'
			        }
			    },
			    series: [
			        {
			            name:'最高气温',
			            type:'line',
			            data:[11, 11, 15, 13, 12, 13, 10],
			            markPoint: {
			                data: [
			                    {type: 'max', name: '最大值'},
			                    {type: 'min', name: '最小值'}
			                ]
			            },
			            markLine: {
			                data: [
			                    {type: 'average', name: '平均值'}
			                ]
			            }
			        },
			        {
			            name:'最低气温',
			            type:'line',
			            data:[1, -2, 2, 5, 3, 2, 0],
			            markPoint: {
			                data: [
			                    {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
			                ]
			            },
			            markLine: {
			                data: [
			                    {type: 'average', name: '平均值'},
			                    [{
			                        symbol: 'none',
			                        x: '90%',
			                        yAxis: 'max'
			                    }, {
			                        symbol: 'circle',
			                        label: {
			                            normal: {
			                                position: 'start',
			                                formatter: '最大值'
			                            }
			                        },
			                        type: 'max',
			                        name: '最高点'
			                    }]
			                ]
			            }
			        }
			    ]
			},
			// 漏斗图
			'funnel':{
			    title: {
			        text: '漏斗图',
			        //subtext: '纯属虚构'
			    },
			    tooltip: {
			        trigger: 'item',
			        formatter: "{a} <br/>{b} : {c}%"
			    },
			    toolbox: {
			        feature: {
			            dataView: {readOnly: false},
			            restore: {},
			            saveAsImage: {}
			        }
			    },
			    legend: {
			        data: ['展现','点击','访问','咨询','订单']
			    },
			    calculable: true,
			    series: [
			        {
			            name:'漏斗图',
			            type:'funnel',
			            left: '10%',
			            top: 60,
			            //x2: 80,
			            bottom: 60,
			            width: '80%',
			            // height: {totalHeight} - y - y2,
			            min: 0,
			            max: 100,
			            minSize: '0%',
			            maxSize: '100%',
			            sort: 'descending',
			            gap: 2,
			            label: {
			                normal: {
			                    show: true,
			                    position: 'inside'
			                },
			                emphasis: {
			                    textStyle: {
			                        fontSize: 20
			                    }
			                }
			            },
			            labelLine: {
			                normal: {
			                    length: 10,
			                    lineStyle: {
			                        width: 1,
			                        type: 'solid'
			                    }
			                }
			            },
			            itemStyle: {
			                normal: {
			                    borderColor: '#fff',
			                    borderWidth: 1
			                }
			            },
			            data: [
			                {value: 60, name: '访问'},
			                {value: 40, name: '咨询'},
			                {value: 20, name: '订单'},
			                {value: 80, name: '点击'},
			                {value: 100, name: '展现'}
			            ]
			        }
			    ]
			},
			// 仪表盘
			'gauge':{
			    tooltip : {
			        formatter: "{a} <br/>{b} : {c}%"
			    },
			    /*
			    toolbox: {
			        feature: {
			            restore: {},
			            saveAsImage: {}
			        }
			    },
			    */
			    series: [
			        {
			            name: '业务指标',
			            type: 'gauge',
			            detail: {formatter:'{value}%'},
			            data: [{value: 80, name: '完成率'}]
			        }
			    ]
			}
	}
	
	
	var chartWidget = {
			title : {
		        text: '某站点用户访问来源',
		        subtext: '纯属虚构',
		        x:'center'
		    },
		    tooltip : {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c} ({d}%)"
		    },
		    legend: {
		        orient: 'vertical',
		        left: 'left',
		        data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
		    },
	}
	
	// 各类型图表公共基础数据
	var chartSeriesLayout = {
			'pie':{		// 饼状图
	            name: '访问来源',
	            type: 'pie',
	            radius : '55%',
	            center: ['50%', '60%'],
	            data:[
	                {value:335, name:'直接访问'},
	                {value:310, name:'邮件营销'},
	                {value:234, name:'联盟广告'},
	                {value:135, name:'视频广告'},
	                {value:1548, name:'搜索引擎'}
	            ],
	            itemStyle: {
	                emphasis: {
	                    shadowBlur: 10,
	                    shadowOffsetX: 0,
	                    shadowColor: 'rgba(0, 0, 0, 0.5)'
	                }
	            }
	        },
	        'radar':{	// 雷达图
		        name: '预算 vs 开销（Budget vs spending）',
		        type: 'radar',
		        // areaStyle: {normal: {}},
		        data : [
		            {
		                value : [4300, 10000, 28000, 35000, 50000, 19000],
		                name : '预算分配（Allocated Budget）'
		            },
		             {
		                value : [5000, 14000, 28000, 31000, 42000, 21000],
		                name : '实际开销（Actual Spending）'
		            }
		        ]
		    },
		    'funnel':{	// 漏斗图
	            name:'漏斗图',
	            type:'funnel',
	            left: '10%',
	            top: 60,
	            //x2: 80,
	            bottom: 60,
	            width: '80%',
	            // height: {totalHeight} - y - y2,
	            min: 0,
	            max: 100,
	            minSize: '0%',
	            maxSize: '100%',
	            sort: 'descending',
	            gap: 2,
	            label: {
	                normal: {
	                    show: true,
	                    position: 'inside'
	                },
	                emphasis: {
	                    textStyle: {
	                        fontSize: 20
	                    }
	                }
	            },
	            labelLine: {
	                normal: {
	                    length: 10,
	                    lineStyle: {
	                        width: 1,
	                        type: 'solid'
	                    }
	                }
	            },
	            itemStyle: {
	                normal: {
	                    borderColor: '#fff',
	                    borderWidth: 1
	                }
	            },
	            data: [
	                {value: 60, name: '访问'},
	                {value: 40, name: '咨询'},
	                {value: 20, name: '订单'},
	                {value: 80, name: '点击'},
	                {value: 100, name: '展现'}
	            ]
	        },
	        // 仪表盘
			'gauge':{	
				name: '业务指标',
	            type: 'gauge',
	            detail: {formatter:'{value}%'},
	            data: [{value: 80, name: '完成率'}]
	        },
	        // 柱状图
	        'bar':{
	            name:'直接访问',
	            type:'bar',
	            data:[320, 332, 301, 334, 390, 330, 320]
	        },
	        // 
	        'line':{
	            name:'最高气温',
	            type:'line',
	            data:[11, 11, 15, 13, 12, 13, 10],
	            /*
	            markPoint: {
	                data: [
	                    {type: 'max', name: '最大值'},
	                    {type: 'min', name: '最小值'}
	                ]
	            },
	            markLine: {
	                data: [
	                    {type: 'average', name: '平均值'}
	                ]
	            }
	            */
	        }
	}
	
	
	
	
	var getTestOption = function(key){
		return jQuery.extend(true, {}, testOption[key]);
	}
	
	var getChartSeriesLayout = function(key){
		return jQuery.extend(true, {}, chartSeriesLayout[key]);
	}
	
	
	
	var getFormatOption = function(echartData,echartConfig,echartOption){
		var defaultEchartConfig = {
				type:'bar',
				x_name_key:'name',
				is_stack:0,
				name_key:'name',
				value_key:'value',
				name_value:'',
				data_key:'',
				data_name:'',
				max_key:'',
				data_type:0,	// 数据形式：0单组，1多组
				empty_val:0,	// 空数据的值：0或者-
				set_min:false,	// 是否依据数据设置最小值
		};
		echartConfig = $.extend({}, defaultEchartConfig, echartConfig);
		
		
		console.log('----------------------------------');
//		console.log(echartData);
		console.log(echartConfig);
		
		
		
		var data_type		= echartConfig.data_type;
		var max_key 		= echartConfig.max_key;
		var data_name 		= echartConfig.data_name;//'分值';
		var x_name_key  	= echartConfig.x_name_key;
		var is_stack  		= echartConfig.is_stack
		var name_key  		= echartConfig.name_key;	
		var value_key 		= echartConfig.value_key;
		var data_key		= echartConfig.data_key;
		var name_value		= echartConfig.name_value;
		var empty_val		= echartConfig.empty_val;
		var min_val			= 0;
		var max_val			= 0;
		
		
		
		// 常用配置词处理
		//-------------------------------------------------------
		var legendData 		= [];
		var seriesData 		= [];
		
		// 各类型图表单独处理
		var seriesLayout 	= [];
		if( typeof echartConfig.type != 'string' ){
			var first_type = echartConfig.type[0];
		}else{
			var first_type = echartConfig.type;
		}
		
		var option		= $.extend({}, getTestOption(first_type), echartOption);	// 整组配置替换
		seriesLayout 	= getChartSeriesLayout(first_type);//chartSeriesLayout[first_type];
		
		if( typeof echartConfig.title != 'undefined' ){
			if( typeof option.title == 'undefined' ){
				option.title = {};
			}
			option.title.text = echartConfig.title;
		}
		//-------------------------------------------------------
		switch( first_type ){
			case 'pie':		//饼状图
			case 'radar':
			case 'line':
			case 'bar':
			case 'gauge':
				option.series 		= [];
				break;
		}
		switch( first_type ){
			case 'pie':		//饼状图
				for(var i in echartData){
					var one = echartData[i];
					legendData.push( one[name_key] );
					seriesData.push( {value:one[value_key], name:one[name_key]} );
				}
				seriesLayout['data'] = seriesData;
				break;
			case 'radar':	//雷达图
				var indicatorData 	= [];
				
				seriesLayout.name 	= data_name;
				seriesLayout.data 	= [];
				
				legendData.push( data_name );
				var data_one 	= {name:data_name,value:[]}
				for(var i in echartData){
					var one = echartData[i];
					indicatorData.push( {max:one[max_key], name:one[name_key]} );
					data_one.value.push( one[value_key] );
				}
				seriesLayout.data.push(data_one);
				option.radar.indicator = indicatorData;
				
//				console.log('A----------------------------------');
//				console.log(echartData);
//				console.log(legendData);
//				console.log(indicatorData);
//				console.log(seriesLayout);
//				console.log('B----------------------------------');
				break;
			case 'line':	// 折线
			case 'bar':		// 柱状图
				var xAxis_data 		= [];
				
				if( data_type==1 ){		//数据形式:1多组
					
					for(var k in echartData){
						var echartDataOne 	= echartData[k];
						xAxis_data.push( k );
						for(var i in echartDataOne){
							
							var one 		= echartDataOne[i];
							var one_name 	= one[name_key];
							var one_value	= one[value_key];
							
							if( typeof seriesData[one_name]=='undefined' ){
								seriesData[one_name] 		= jQuery.extend(true, {}, seriesLayout);
								seriesData[one_name].data 	= [];
								seriesData[one_name].name 	= one_name;
								legendData.push( one_name );
								if( is_stack==1 ){
									seriesData[one_name]['stack'] = k;
								}
							}
							
							
							if( echartConfig.set_min ){
								if( min_val==0 )min_val = one_value;
								if( min_val>one_value ){
									min_val=one_value;
								}
								if( max_val<one_value ){
									max_val=one_value;
								}
							}
							
							seriesData[one_name].data.push( one_value );
						}
						console.log(seriesData);
						option.series = [];
						for(var i in seriesData){
							option.series.push( seriesData[i] );
						}
					}
					option.xAxis[0].data 	= xAxis_data;
					
//					console.log('E----------------------------------');
//					console.log(echartData);
//					console.log(data_name+'--'+name_key+'--'+value_key);
//					console.log(legendData);
//					console.log(seriesLayout);
//					console.log(xAxis_data);
//					console.log(echartOption);
//					console.log(option);
//					console.log('F----------------------------------');
					
				}else{						//数据形式：0单组
					if( typeof value_key == 'string' ){
						if( data_key=='' ){		// 单统计元素
							legendData.push( data_name );
							seriesLayout.name 	= data_name;
							
							seriesLayout.data 	= [];
							for(var i in echartData){
								var one = echartData[i];
								var one_value = one[value_key];
								xAxis_data.push( one[name_key] );
								
								if( echartConfig.set_min ){
									if( min_val==0 )min_val = one_value;
									if( min_val>one_value ){
										min_val=one_value;
									}
									if( max_val<one_value ){
										max_val=one_value;
									}
								}
								
								seriesLayout.data.push( one[value_key] );
							}
							option.series.push( seriesLayout );
						}else{					// 多统计元素
							var seriesArr = [];

							// 对x轴无数据的品类增加空数据
							//-------------------------------------
							var legendData 		= [];
							var xAxis_data	  	= [];
							var format_data_arr = {};
							
							// 一、首先，获取所有品类及所有日期（x轴字段）
							for(var i in echartData){
								var one 			= echartData[i];
								var data_key_value 	= one[data_key];
								var value_key_value = one[value_key];
								var name_key_value	= one[name_key];
								
								
								if( echartConfig.set_min ){
									if( min_val==0 )min_val = value_key_value;
									if( min_val>value_key_value ){
										min_val=value_key_value;
									}
									if( max_val<value_key_value ){
										max_val=value_key_value;
									}
								}
								
								if( $.inArray(name_key_value, xAxis_data)==-1 ){				// x轴字段，例：日期
									xAxis_data.push( name_key_value );
								}
								if( $.inArray(data_key_value, legendData)==-1 ){				// x轴字段，例：日期
									legendData.push( data_key_value );
									
									if( typeof seriesArr[data_key_value]=='undefined' ){		// 品类
										seriesArr[data_key_value] 			= jQuery.extend({}, seriesLayout);
										seriesArr[data_key_value].data		= [];
										seriesArr[data_key_value]['name'] 	= data_key_value;
										//legendData.push( data_key_value );
									}
								}
								
								if( typeof format_data_arr[data_key_value]=='undefined' ){		// 品类
									format_data_arr[data_key_value] = {};
								}
								if( typeof format_data_arr[data_key_value][name_key_value]=='undefined' ){
									format_data_arr[data_key_value][name_key_value] = value_key_value;
								}
								
							}
//							
//							console.log('C----------------------------------');
//							console.log( xAxis_data );
//							console.log( legendData );
//							console.log( format_data_arr );
							
							
							// 二、其次，循环所有，按天载入数据
							for(var i in xAxis_data){
								var name_key_value = xAxis_data[i]
								for(var j in legendData){
									var data_key_value = legendData[j]
									var data_val = empty_val;
									if(typeof format_data_arr[data_key_value][name_key_value]!='undefined'){
										data_val = format_data_arr[data_key_value][name_key_value];
									}
									seriesArr[data_key_value].data.push( data_val );
								}
							}
							option.series = getIndexArr(seriesArr);
						}
						option.xAxis[0].data 	= xAxis_data;
//						
//						console.log('E----------------------------------');
//						
//						console.log(option);
//						console.log('F----------------------------------');
						
					}else{
						legendData = data_name;
						for(var k in value_key){
							var type_val 		= echartConfig.type[k];
							var data_name_val 	= data_name[k];
							var value_key_val 	= value_key[k];
							
							//--------------------------
							if( typeof seriesData[value_key_val]=='undefined' ){
								
								console.log('type_val::'+type_val);
								
								seriesData[value_key_val]				= getChartSeriesLayout(type_val);//jQuery.extend(true, {}, chartSeriesLayout[type_val]);
//								seriesData[value_key_val] 				= jQuery.extend(true, {}, seriesLayout);
								seriesData[value_key_val].data 			= [];
								seriesData[value_key_val].name 			= data_name_val;
								seriesData[value_key_val].yAxisIndex 	= k;
							}
							
							for(var i in echartData){
								var one = echartData[i];
								if( k==0 ){
									xAxis_data.push( one[name_key] );
								}
								
								if( echartConfig.set_min ){
									if( min_val==0 )min_val = one[value_key_val];
									if( min_val>one[value_key_val] ){
										min_val=one[value_key_val];
									}
									if( max_val<one[value_key_val] ){
										max_val=one[value_key_val];
									}
								}
								
								//seriesLayout.data.push( one[value_key] );
								seriesData[value_key_val].data.push( one[value_key_val] );
							}
							
							//--------------------------
						}
						
						//seriesData = getIndexArr(seriesData);
						
						//option.xAxis[0].data 	= xAxis_data;
//						console.log('E----------------------------------');
//						console.log(xAxis_data);
//						console.log(seriesData);
//						console.log('F----------------------------------');
//						option.series = [];
//						for(var i in seriesData){
//							option.series.push( seriesData[i] );
//						}
						option.xAxis[0].data 	= xAxis_data;
						option.series = getIndexArr(seriesData);
					}
					
				}
				

				
				break;
			case 'gauge':
				seriesLayout.name 	= data_name;
				seriesLayout.data	= [];
				seriesLayout.data.push({value: echartData[value_key], name: name_value});
				break;
		}
		switch( first_type ){
			case 'pie':		//饼状图
			case 'radar':
				option.legend.data = legendData;
				option.series.push( seriesLayout );
				break;
			case 'line':
			case 'bar':
				option.legend.data = legendData;
				if (typeof option.yAxis === "undefined")option.yAxis = {};
				option.yAxis.min = getProcessedMinValue(max_val,min_val);
				//alert( option.yAxis.min +'===='+ tenth_val +'===='+ min_val +'===='+ max_val +'===='+ echartConfig.set_min );
				break;
			case 'gauge':
				option.series.push( seriesLayout );
				break;
		}
//		console.log('E----------------------------------');
//		console.log(option);
//		console.log('F----------------------------------');
		
		return option;
	}
	
	var getProcessedMinValue = function(max_val,min_val){
		var tenth_val = Math.floor((max_val-min_val) / 4);
		return min_val*1 - tenth_val*1;
	}
	
	var getIndexArr = function(obj){
		var arr = [];
		for(var k in obj){
			arr.push( obj[k] );
		}
		return arr;
	}
	
	// 渲染页面上的所有图表
	var drawAllPageCharts = function(){
		$('.echart-canvas').each(function(){
			var that = $(this);
			// 判断当前节点是否处于显示状态，是则加载，否则等待其他事件调用后加载
			if( that.is(':visible') ){
				drawAllOneCharts(that);
			}
		})
	}
	
	var drawAllOneCharts = function(that){
			
		// 判断当前节点是否处于显示状态，是则加载，否则等待其他事件调用后加载
		if( that.is(':visible') ){
			//echarts.init(dom, 'purple-passion')
			var chart = echarts.init(that[0], 'infographic');	//
			chart.showLoading();
			
			var echartData 		= that.attr('echart-data');
			var echartConfig 	= that.attr('echart-config');
			var echartOption	= that.attr('echart-option');
			
			echartData 		= eval('(' + echartData + ')');
			echartConfig 	= eval('(' + echartConfig + ')');
			echartOption 	= eval('(' + echartOption + ')');
			
			var option = getFormatOption(echartData,echartConfig,echartOption);
			drawOneChart(chart,option);
		}
	}
	
	// 渲染一个图表
	var drawOneChart = function(chart,option){
		//var chart = echarts.init(document.getElementById(idName));
		
		chart.setOption(option);
		chart.hideLoading();
		window.onresize = chart.resize;
	}
	
	// 绑定事件
	var BindingEvent = function(){
		
		// 延迟加载图表
		$("[echart-for]").each(function(){
			var that = $(this);
			var echartFor = that.attr('echart-for');
			
			that.click(function(){
				setTimeout(function(){
					drawAllOneCharts( $(echartFor).find('.echart-canvas') );
				},50)
			})
		})
	}
	
	
	//+----------------------------------------------------------
	//+	开放方法区
	//+----------------------------------------------------------

	OpenFunc.init = function(opt_para){
		opt = $.extend(opt,opt_para);
		console.log(opt);
		
		// 渲染页面上的所有图表
		drawAllPageCharts();
		
		// 绑定事件
		BindingEvent();
	}
	
	OpenFunc.setChartOption = function(myChart,option,echart_config){
		if( echart_config && echart_config.set_min ){
			var min_val = 0;
			var max_val = 0;
			
			var data0 = option.series[0].data;
			for( var i in data0 ){
				var val = data0[i];
				if(min_val==0)min_val=val;
				if(max_val==0)max_val=val;
				
				if(min_val>val)min_val=val;
				if(max_val<val)max_val=val;
			}
			
			if (typeof option.yAxis === "undefined")option.yAxis = {};
			option.yAxis.min = getProcessedMinValue(max_val,min_val);
		}
		
		myChart.setOption(option);
	}
	
	OpenFunc.formatDrawOneChart = function( echartData,chart ){
		if( typeof chart == 'undefined' ){
			var chart = echarts.init(this);	//, 'infographic'
		}
		chart.showLoading();
		
		var defaultOption = {
				echart_data		: {},
				echart_config	: {},
				echart_option	: {}
		};
		var echartData = $.extend({}, defaultOption, echartData);
		
		var option = getFormatOption(echartData.echart_data,echartData.echart_config,echartData.echart_option);
		drawOneChart(chart,option);
		
		return option;
	}
	
	return OpenFunc;
	
})(jQuery);

(function ($) {
	$.fn.extend({
		// 获取选项所有关联的data数据
		formatDrawOneChart : function( echartData,chart ){
			return WhalePHP.Echarts.formatDrawOneChart(echartData,chart );
		},
		
		// 请求数据并执行回调函数
		getFormatDrawOneChart : function( url,request_opt,func ){
			var myChart = echarts.init(this[0]);
			myChart.showLoading();
			$.get(url, request_opt, function (data) {
				myChart.hideLoading();
				data = eval('(' + data + ')');
				func(myChart,data);
			})
		},
		
	});
})(jQuery);

// 初始化页面组件
$(function(){
	WhalePHP.Echarts.init();
})




/*
var chart = echarts.init(document.getElementById('high-column2'));
option = {
	title : {
		text: '某站点用户访问来源',
		subtext: '纯属虚构',
		x:'center'
	},
	tooltip : {
		trigger: 'item',
		formatter: "{a} <br/>{b} : {c} ({d}%)"
	},
	legend: {
		orient: 'vertical',
		left: 'left',
		data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
	},
	series : [
		{
			name: '访问来源',
			type: 'pie',
			radius : '55%',
			center: ['50%', '60%'],
			data:[
				{value:335, name:'直接访问'},
				{value:310, name:'邮件营销'},
				{value:234, name:'联盟广告'},
				{value:135, name:'视频广告'},
				{value:1548, name:'搜索引擎'}
			],
			itemStyle: {
				emphasis: {
					shadowBlur: 10,
					shadowOffsetX: 0,
					shadowColor: 'rgba(0, 0, 0, 0.5)'
				}
			}
		}
	]
};
chart.setOption(option);
window.onresize = chart.resize;
*/