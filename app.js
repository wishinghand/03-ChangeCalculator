$('#calculate').click(function(){
    //output blocks
    var dollars = $('#dollars');
    var quarters = $('#quarters');
    var dimes = $('#dimes');
    var nickels = $('#nickels');
    var pennies = $('#pennies');
    //generic output
    var output = $('#display');

    //make sure input is only two decimal places
    var due = parseFloat($('#due').val()).toFixed(2);
    var given = parseFloat($('#given').val()).toFixed(2);

    //round off weird javascript floating point error
    var change = (given - due).toFixed(2);

    //error checking for non-numbers
    if ( (isNaN(due)) || (isNaN(given)) ) {
        output.text("Please make sure you fill out the fields with only numbers.");
        return;
    }

    //error checking for not enoguh money
    if (change < 0){
        output.text("You need to give more money.");
        return;
    }

    var dollarChange = Math.floor(change);
    dollars.append(dollarChange);

    var newChange = Math.round((change % 1 ) * 100);

    quarters.append(Math.floor(newChange / 25));
    newChange %= 25;

    dimes.append(Math.floor(newChange / 10));
    newChange %= 10;

    nickels.append(Math.floor(newChange / 5));
    newChange %= 5;

    pennies.append(Math.floor(newChange / 1));
    newChange %= 1;

});