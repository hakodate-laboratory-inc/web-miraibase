import moment from 'moment'

var toDay = moment()
var eventDay = moment(event.startDate)
var dayDiff=eventDay.diff(today, 'days')

if(dayDiff<0){
	document.write("p.eventStatus.end 終了")

}else if(dayDiff == 0){
	document.write("p.eventStatus.today 本日開催")

}else if(dayDiff == 1){
	document.write("p.eventStatus.tommorow 明日開催")

}else{
	document.write("p.eventStatus.yet まだだよ")
}
