function closure() {
	let count = 0;	
	return function countNumber() {
		count = count + 1;
        return count;
	}
	
}

function testFunc() {
    let count = 0;
    function call() {
        count = count + 1;
        return count;
    }

    return {
        call
    }
}

console.log(testFunc().call());
