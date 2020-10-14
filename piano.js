const keys = document.querySelectorAll('.key')


const wk = ['q','w','e','r','t','y','u','i','o','p']
const bk = ['2','3','5','6','7','9','0']

const whitekeys = document.querySelectorAll('.key.white')
const blackkeys = document.querySelectorAll('.key.black')



keys.forEach(key =>{
	key.addEventListener('click',()=>playNote(key))
})




document.addEventListener('keydown', e=>{
	keys.forEach(key =>{
		key.classList.remove('active')
	})
	if(e.repeat) return
	const key = e.key
	const white_index = wk.indexOf(key)
	const black_index = bk.indexOf(key)
	if (white_index > -1) playNote(whitekeys[white_index])
	if (black_index > -1) playNote(blackkeys[black_index])

})


function playNote(key){
	const noteAudio = document.getElementById(key.dataset.note)
	noteAudio.currentTime = 0
	noteAudio.play()

	key.classList.add('active')
	noteAudio.addEventListener('ended' , ()=>{
		key.classList.remove('active')
	})
}
