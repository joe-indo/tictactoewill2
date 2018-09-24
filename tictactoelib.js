var tic_tac_toe_table = [[],[],[]];
var check_win_arr = [[],[],[]];

function linear_search(usr_arr, searching_ele){
	var i, j, status;
	for (i = 0; i < 3; ++i){
		for (j = 0; j < 3; ++j){
			if (searching_ele == usr_arr[i][j]){
				return true;
			}
			
		}
	}
	return false;
}

function check_none(args){
	if (args == ""){
		var choice = confirm("You can not leave this blank !!!\nDo you want to start again ???");
		if (choice == true){
			player_setup();
		}
		else{
			return false;
		}
	}
}

function check_coor(x_coor, y_coor){
	// This function will check if the usr_coordinate
	// After that it will return a boolean value to indicate the input is right or not
	var i, j;

	for (i = 0; i < 3; ++i){
		for (j = 0; j < 3; ++j){
			if ((Number.isInteger(x_coor) == false) || (Number.isInteger(y_coor) == false) || (x_coor > 2) || (y_coor > 2) || 
				(isNaN(x_coor) == true) || (isNaN(y_coor) == true) || 
				(tic_tac_toe_table[x_coor][y_coor] == "[X] ") || (tic_tac_toe_table[x_coor][y_coor] == "[O] ")){
				// This input is out of the domain
				alert("This input is not valid\nPlease enter again !!!");
				return false;
			}
			else{
				return true;
			}
		}
	}
}	

function no_one_win(){
	var status = check_win();
	if ((linear_search(tic_tac_toe_table, "[--] ") == false) && (status == -1)){
		// The array is full
		alert("There is no winner");
		start_again();
	}
	else{
		return false;
	}
}

function player_setup(){
	var player_info = [];
	var player_1, player_2;
	var player_1_choice, player_2_choice;
	var status;

	player_1 = prompt("Player 1 name: ");
	status = check_none(player_1);

	// If status equal to false, kill the program
	if (status == false){
		return; 
	}

	player_2 = prompt("Player 2 name: ");
	status = check_none(player_2);

	// If status equal to false, kill the program
	if (status == false){
		return; 
	}

	player_1_choice = prompt(player_1 + "\n" + "Which one would you like to be ???\nX or O");
	player_1_choice =  player_1_choice.toUpperCase();

	if (player_1_choice == "X"){
		player_2_choice = "O";
		player_info[0] = player_1;
		player_info[1] = player_1_choice;
		player_info[2] = player_2;
		player_info[3] = player_2_choice;
		new_game()
		return player_info;

	}
	else if (player_1_choice == "O"){
		player_2_choice = "X";
		player_info[0] = player_1;
		player_info[1] = player_1_choice;
		player_info[2] = player_2;
		player_info[3] = player_2_choice;
		new_game()
		return player_info;
	}
	else{
		var choice = confirm("The input is wrong\nDo you want to start again ???");
		if (choice == true){
			player_setup();
		}
		else{
			return;
		}
	}
}

// Game loop --------------------------------------------------------------------------

function new_game(){
	var i, j;

	for (i = 0; i < 3; ++i){
		for (j = 0; j < 3; ++j){
			// testing to print the table
			tic_tac_toe_table[i][j] = "[--] ";
			check_win_arr[i][j] = 100; 
		}
	}
	alert(tic_tac_toe_table[0][0] + tic_tac_toe_table[0][1] + tic_tac_toe_table[0][2] + "\n" +
		tic_tac_toe_table[1][0] + tic_tac_toe_table[1][1] + tic_tac_toe_table[1][2] + "\n" +
		tic_tac_toe_table[2][0] + tic_tac_toe_table[2][1] + tic_tac_toe_table[2][2]
		);
}

function game_loop(){
	alert(tic_tac_toe_table[0][0] + tic_tac_toe_table[0][1] + tic_tac_toe_table[0][2] + "\n" +
		tic_tac_toe_table[1][0] + tic_tac_toe_table[1][1] + tic_tac_toe_table[1][2] + "\n" +
		tic_tac_toe_table[2][0] + tic_tac_toe_table[2][1] + tic_tac_toe_table[2][2]
		);
}

function check_win(){
	// This function will determind if a player win the game or not then return a boolean value
	var i, j;
	var status;

	for (i = 0; i < 3; ++i){
		for (j = 0; j < 3; ++j){
			var sum_row_1 = check_win_arr[0][0] + check_win_arr[0][1] + check_win_arr[0][2];
			var sum_row_2 = check_win_arr[1][0] + check_win_arr[1][1] + check_win_arr[1][2];
			var sum_row_3 = check_win_arr[2][0] + check_win_arr[2][1] + check_win_arr[2][2];

			var sum_col_1 = check_win_arr[0][0] + check_win_arr[1][0] + check_win_arr[2][0];
			var sum_col_2 = check_win_arr[0][1] + check_win_arr[1][1] + check_win_arr[2][1];
			var sum_col_3 = check_win_arr[0][2] + check_win_arr[1][2] + check_win_arr[2][2];

			var sum_dia_1 = check_win_arr[0][0] + check_win_arr[1][1] + check_win_arr[2][2];
			var sum_dia_2 = check_win_arr[0][2] + check_win_arr[1][1] + check_win_arr[2][0];
		}
	}

	if (sum_row_1 == 3){
		status = "X";
		return status;
	}
	else if (sum_row_2 == 3){
		status = "X";
		return status;
	}
	else if (sum_row_3 == 3){
		status = "X";
		return status;
	}
	else if (sum_col_1 == 3){
		status = "X";
		return status;
	}
	else if (sum_col_2 == 3){
		status = "X";
		return status;
	}
	else if (sum_col_3 == 3){
		status = "X";
		return status;
	}
	else if (sum_dia_1 == 3){
		status = "X";
		return status;
	}
	else if (sum_dia_2 == 3){
		status = "X";
		return status;
	}

	else if (sum_row_1 == 0){
		status = "O";
		return status;
	}
	else if (sum_row_2 == 0){
		status = "O";
		return status;
	}
	else if (sum_row_3 == 0){
		status = "O";
		return status;
	}
	else if (sum_col_1 == 0){
		status = "O";
		return status;
	}
	else if (sum_col_2 == 0){
		status = "O";
		return status;
	}
	else if (sum_col_3 == 0){
		status = "O";
		return status;
	}
	else if (sum_dia_1 == 0){
		status = "O";
		return status;
	}
	else if (sum_dia_2 == 0){
		status = "O";
		return status;
	}
	else{
		return -1;
	}
}

function start_again(){
	var choice = confirm("Do you want to play the game again ???");
	if (choice == true){
		player_setup()
	}
	else{
		alert("Thank you for playing the game !!!");
		return false;
	}
}

function get_coordinate(info_arr){
	var player_1_name, player_2_name, player_1_choice, player_2_choice;
	var counter;
	var row_1, col_1, row_2, col_2;
	var status, again_sts, no_win;

	for (counter = 0; counter < 4; ++counter){
		player_1_name = info_arr[0];
		player_1_choice = info_arr[1];
		player_2_name = info_arr[2];
		player_2_choice = info_arr[3];
	}

	if ((player_1_choice == "X") || (player_1_choice == "x")){
		// Asker for the coordinate;
		row_1 = Number(prompt("Please enter the row number: "));
		col_1 = Number(prompt("Please enter the collum number: "));

		while (check_coor(row_1, col_1) == false){
			row_1 = Number(prompt("Please enter the row number: "));
			col_1 = Number(prompt("Please enter the collum number: "));
		}
		tic_tac_toe_table[row_1][col_1] = "[X] ";
		Number(check_win_arr[row_1][col_1] = 1);

		game_loop();
		no_win = no_one_win();
		status = check_win();
		if (status == "X"){
			alert("The winner is: " + player_1_name);
			again_sts = start_again()
			if (again_sts == false){
				return
			}
		}
		else if (status == "O"){
			alert("The winner is: " + player_2_name);
			again_sts = start_again()
			if (again_sts == false){
				return
			}
		}

		row_2 = Number(prompt("Please enter the row number: "));
		col_2 = Number(prompt("Please enter the collum number: "));
		
		while (check_coor(row_2, col_2) == false){
			row_2 = Number(prompt("Please enter the row number: "));
			col_2 = Number(prompt("Please enter the collum number: "));
		}
		tic_tac_toe_table[row_2][col_2] = "[O] ";
		Number(check_win_arr[row_2][col_2] = 0);

		game_loop();
		no_win = no_one_win();
		status = check_win();
		if (status == "X"){
			alert("The winner is: " + player_1_name);
			again_sts = start_again()
			if (again_sts == false){
				return
			}
		}
		else if (status == "O"){
			alert("The winner is: " + player_2_name);
			again_sts = start_again()
			if (again_sts == false){
				return
			}
		}
		else{
			get_coordinate(info_arr);
		}
	}

	else if ((player_2_choice == "X") || (player_2_choice == "x")){
		// Asker for the coordinate;
		row_2 = Number(prompt("Please enter the row number: "));
		col_2 = Number(prompt("Please enter the collum number: "));
		
		while (check_coor(row_2, col_2) == false){
			row_2 = Number(prompt("Please enter the row number: "));
			col_2 = Number(prompt("Please enter the collum number: "));
		}		
		tic_tac_toe_table[row_2][col_2] = "[X] ";
		Number(check_win_arr[row_2][col_2] = 1);

		game_loop();
		no_win = no_one_win();
		status = check_win();
		if (status == "X"){
			alert("The winner is: " + player_2_name);
			again_sts = start_again()
			if (again_sts == false){
				return
			}
		}
		else if (status == "O"){
			alert("The winner is: " + player_1_name);
			again_sts = start_again()
			if (again_sts == false){
				return
			}
		}

		row_1 = Number(prompt("Please enter the row number: "));
		col_1 = Number(prompt("Please enter the collum number: "));

		while (check_coor(row_1, col_1) == false){
			row_1 = Number(prompt("Please enter the row number: "));
			col_1 = Number(prompt("Please enter the collum number: "));	
		}
		tic_tac_toe_table[row_1][col_1] = "[O] ";
		Number(check_win_arr[row_1][col_1] = 0);

		game_loop();
		no_win = no_one_win();
		status = check_win();
		if (status == "X"){
			alert("The winner is: " + player_2_name);
			again_sts = start_again()
			if (again_sts == false){
				return
			}
		}
		else if (status == "O"){
			alert("The winner is: " + player_1_name);
			again_sts = start_again()
			if (again_sts == false){
				return
			}
		}
		else{
			get_coordinate(info_arr);
		}
	}
}