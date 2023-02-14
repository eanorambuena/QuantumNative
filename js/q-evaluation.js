//  Update all the export code and probabilities report.

function updateCircuitParts( circuit ){
	// const braketEl = document.getElementById( circuit.name +'-braket' )
	// if( braketEl ) braketEl.innerText = '\n'+ circuit.toAmazonBraket( true )

	const latexEl = document.getElementById( circuit.name +'-latex' )
	if( latexEl ) latexEl.innerText = '\n'+ circuit.toLatex( true )

	const diagramEl = document.getElementById( circuit.name +'-diagram' )
	if( diagramEl ) diagramEl.innerText = circuit.toDiagram( true )
	
	const textEl = document.getElementById( circuit.name +'-text' )
	if( textEl ) textEl.innerText = circuit.toText()

	const reportEl = document.getElementById( circuit.name +'-report' )
	if( reportEl ) reportEl.innerText = circuit.report$()
}


//  EVALUATION.

window.addEventListener( 'Q.Circuit.evaluate began', function( event ){
	codeConsoleLog( 
		'\n\nBeginning evaluation for “'+ event.detail.circuit.name +'”\n'+
		event.detail.circuit.toDiagram() +'\n\n'
	)
})
window.addEventListener( 'Q.Circuit.evaluate progressed', function( event ){
	const 
	length       = 20,
	percent      = Math.round( event.detail.progress * 100 ),
	percentText  = ( ''+ percent ).padStart( 3 ) +'%',
	barLength    = Math.round( length * event.detail.progress ),
	barComplete  = ''.padStart( barLength, '█' ),
	barRemaining = ''.padStart( length - barLength, '░' ),
	opsTotal     = event.detail.operationsTotal,
	opsCompleted = ( ''+ event.detail.operationsCompleted ).padStart( Math.log( opsTotal ) * Math.LOG10E + 1 | 0, ' ' )

	codeConsoleLog( 

		barComplete  + 
		barRemaining +' '+ 
		percentText  +'   '+
		opsCompleted +' of '+
		opsTotal
	)

	
	//  What’s the actual state of the circuit at this moment?
	//  We should come back and do a cool animated version of this data :)

	const state = event.detail.state
	// codeConsoleLog( 'state width', state.getWidth(), 'state height', state.getHeight() )
	// codeConsoleLog( 'state', state.toTsv() )
})
window.addEventListener( 'Q.Circuit.evaluate completed', function( event ){

	codeConsoleLog( 

		'\nEvaluation completed for “'+ event.detail.circuit.name +'”'+
		'\nwith these results:\n'+ event.detail.circuit.report$() +'\n\n\n'
	)
	
	const 
	circuit  = event.detail.circuit,
	reportEl = document.getElementById( circuit.name +'-report' )

	//if( reportEl ) reportEl.innerText = circuit.report$()
	updateCircuitParts( circuit )
})
window.addEventListener( 'Q gui altered circuit', function( event ){
	updatePlaygroundFromDom( event.detail.circuit )
})