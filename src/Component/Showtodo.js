
import TodoListDate from "./TodoListDate";
function Showtodo(props) {
	console.log(props.data[0]);
	const date = new Array();
	
	if (props.data.length != 0) {
		for(var i=0;i<props.data.length;i++){
			date[i]=props.data[i].todo.date
		}
	}
	function onlyUnique(value, index, self) {
		return self.indexOf(value) === index;
	  }
	var uniquedate = date.filter(onlyUnique);
	uniquedate.sort();
	console.log(date);
	
	
	// for(var i=0;i<props.data.length;i++){
	// 	date.forEach(element => {
	// 		if(props.data[i].todo.date!=element){
	// 			date[count]=props.data[i].todo.date;
	// 			count=count+1;
	// 		}
	// 	});
	// }
	// console.log(date);

	return (
		<div>
			{uniquedate.map((e)=>(
				<TodoListDate date={e} list={props.data}/>
			))}
			
		</div>
	);
}

export default Showtodo;
