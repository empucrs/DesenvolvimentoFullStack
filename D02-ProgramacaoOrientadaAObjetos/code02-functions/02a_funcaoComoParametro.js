// 02a_funcaoComoParametro
function decision(question, doOK, doCancel) {
   if (question=="OK") doOK()
   else doCancel();
}

function showOk() { console.log( "You agreed." ); }

function showCancel() { console.log( "You canceled the execution." ); }

decision("OK", showOk, showCancel);
decision("Cancel", showOk, showCancel);

