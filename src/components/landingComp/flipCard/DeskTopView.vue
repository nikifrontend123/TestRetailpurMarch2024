<template>
	<div class=" w-100">
		<div class=" w-100">
			<nav class="d-flex">
				<div style="background-color: #F6F7F9;" class="nav nav-tabs w-100 d-flex justify-content-between px-5" id="nav-tab" role="tablist">
					<button :class="{actives: activeButton === 'red'}" @click="activeButton = 'red'" class="et nav-item nav-link active fs-4" id="easy-turn-tab"
						data-bs-toggle="tab" data-bs-target="#easy-turn" type="button" role="tab" aria-controls="easy-turn"
						aria-selected="true" style="  width: 30% ;"> <img src="img/EasyTurn.png" width="70">
						Easy Turn</button>

					<button :class="{actives: activeButton === 'red'}" @click="activeButton = 'red'" class="el nav-item nav-link fs-4" id="easy-learn-tab el"
						data-bs-toggle="tab" data-bs-target="#easy-learn" type="button" role="tab"
						aria-controls="easy-learn" aria-selected="false" style=" width: 30%;"> <img
							src="img/EasyLearn.png" width="70">
						Easy Learn</button>

					<button :class="{actives: activeButton === 'red'}" @click="activeButton = 'red'" class="ee nav-item nav-link fs-4" id="easy-earn-tab ee"
						data-bs-toggle="tab" data-bs-target="#easy-earn" type="button" role="tab" aria-controls="easy-earn"
						aria-selected="false" style=" width: 30%;"> <img src="img/EasyEarn.png" width="70">
						Easy Earn</button>
				</div>
			</nav>
			<div class="tab-content" id="nav-tabContent">
				<div class="tab-pane fade active show  m-0" id="easy-turn" role="tabpanel" 
					aria-labelledby="easy-turn-tab">
					<EasyTurn class="mt-3 mx-4 shadow" style="background-color: #FFF ;"></EasyTurn>
				</div>
				<div class="tab-pane fade " id="easy-learn" role="tabpanel"
					aria-labelledby="easy-learn-tab">
					<EasyLearn class="mt-3 mx-4 shadow" style="background-color: #FFF ;"></EasyLearn>
				</div>
				<div class="tab-pane fade m-0" id="easy-earn" role="tabpanel"
					aria-labelledby="easy-earn-tab">
					<EasyEarn class="mt-3  mx-4 shadow" style="background-color: #FFF ;"></EasyEarn>
				</div>
			</div>
		</div>

	</div>
</template>

<script> 
import EasyEarn from './EasyEarn.vue';
import EasyLearn from './EasyLearn.vue';
import EasyTurn from './EasyTurn.vue';
// import FrontPageData from './FrontPageData.vue';


export default {
	components: {
		// FrontPageData,
		EasyTurn,
		EasyLearn,
		EasyEarn
	},
	
	data() {
		return{
			activeButton: 'red'
		}
	}
	}
</script>

<style  scoped>
nav>div button.nav-item.nav-link.active:after {
	content: "";
	position: relative;
	bottom: -80px;
	left: -22%;
	border: 15px solid transparent; 
}

nav>div button.nav-item.nav-link.active {
	transition: .9s;
	/* transform: rotateY(-360deg); */
}

nav>div button.et.nav-item.nav-link.active:after {
	border-top-color: #f9d09b;
}

nav>div button.el.nav-item.nav-link.active:after {
	border-top-color: #f9d09b;
}

nav>div button.ee.nav-item.nav-link.active:after {
	border-top-color: #f9d09b;
}

.actives {
	background-color: #FFF2CC ;
}

</style>



 