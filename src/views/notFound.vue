<template>
	<div>
    <div class="belt"></div>
    <div class="scanner"></div>
    <div class="scan-window"></div>
    <div class="hide"></div>
    <div class="monitor text"></div>

    <div class="box">
      <p>User X</p>
      <p class="version"></p>
      <div class="user"></div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap"
import $ from "jquery"
export default {
	data() {
    return {
      text: ['404', 'Not Found'],
      counter: 0,
      tl: null,
    };
  },
  mounted() {
    // Set the browser version
    this.setBrowserVersion();

    // Start the conveyor belt animation
    this.startConveyorBelt();

    // Start the monitor 'scanning' effect
    this.startScanning();
  },
  methods: {
    setBrowserVersion() {
      // Use the browser detection function, and set the version in the .version element
      $('.version').text(this.detectBrowser());
    },
    detectBrowser() {
      // Your original browser detection code
      // ...
      return 'Browser Info'; // Replace this with actual browser info
    },
    startConveyorBelt() {
      // Assuming you are using GSAP for the animation
      gsap.timeline().to('.box', 4, {
        right: '0',
        ease: Power0.easeNone
      });

      gsap.timeline().call(() => { 
        $('.box').addClass('scanned');
        $('.scan-window').addClass('scanning');
      }, null, null, 2.5);
    },
    startScanning() {
      const elem = $('.monitor');
      setInterval(() => {
        elem.text(this.text[this.counter]);
        elem.toggleClass('text');
        this.counter++;
        if (this.counter >= this.text.length) {
          this.counter = 0;
        }
      }, 1000);
    }
  }
}
</script>

<style lang="scss">

$red: #f6525d;
$grey: #dedded;
$purple: #7e6e92;
$darkpurple: #655079;
$darkpurple1: #543f6a;
$blue: #70a8ff;
$yellow: #fdcd23;
$bag: #E3D0B9;

* {
	margin: 0;
	padding: 0;
	box-sizing:border-box;
}

html, body {
	width: 100%;
	height: 100%;
}

body  {
	display: flex;
	justify-content: center;
	align-items: flex-end;
	background: #505050 !important;
	overflow: hidden;
}

.scanner {
	position: absolute;
	margin: auto;
	width: 300px;
	height: 250px;
	bottom: 50%;
	left: 0;
	right: 0;
	background: $grey;
	border-top-right-radius: 16px;
	border-top-left-radius: 16px;
	box-shadow: inset 0 -20px 0 0 $grey,
							inset 0 -40px 0 0 $purple;
	
	&:before, &:after {
		content: '';
		position: absolute;
		margin: auto;
	}
	
	&:before {
		width: 20px;
		height: 30px;
		top: -30px;
		left: 20px;
		background: transparentize($yellow, .4);
		border-top-right-radius: 10px;
		border-top-left-radius: 10px;
	}
	
	&:after {
		width: 150px;
		height: 20px;
		background: darken($grey, 5);
		top: -20px;
		right: 20px;
		border-top-right-radius: 10px;
		border-top-left-radius: 10px;
	}
}

.belt {
	position: absolute;
	margin: auto;
	width: 800px;
	height: 30px;
	background: $purple;
	border-radius: 15px;
	bottom: calc(50% + 50px);
	left: 0;
	right: 0;
	border: 4px solid $grey;
	
	&:before, &:after {
		position: absolute;
		content: '';
		margin: auto;
	}
	
	&:before {
		width: 10px;
		height: 50px;
		background: darken($grey, 10);
		bottom: calc(50% - 54px);
		left: 20px;
		box-shadow: 745px 0 0 0 darken($grey, 5);
	}
	
	&:after {
		width: 30px;
		height: 10px;
		background: darken($grey, 25);
		bottom: calc(50% - 54px);
		left: 10px;
		border-top-right-radius: 5px;
		border-top-left-radius: 5px;
		box-shadow: 745px 0 0 0 darken($grey, 25);
	}
}

.monitor {
	position: absolute;
	width: 160px;
	height: 90px;
	background: darken($darkpurple1, 10);
	margin: auto;
	bottom: calc(50% + 130px);
	left: 500px;
	right: 0;
	border: 4px solid $grey;
	text-align: center;
	line-height: 85px;
	font-size: 50px;
	color: $blue;
	font-family: 'Share Tech Mono', monospace;
	
	&.text {
		font-size: 30px;
	}
	
	&:before, &:after {
		content: '';
		position: absolute;
		margin: auto;
	}
	
	&:before {
		width: 10px;
		height: 20px;
		background: darken($grey, 15);
		left: 0;
		right: 0;
		bottom: -24px;
	}
	
	&:after {
		width: 105px;
		height: 10px;
		background: darken($grey, 15);
		left: -24px;
		bottom: -34px;
	}
}

.scan-window {
	position: absolute;
	margin: auto;
	width: 150px;
	height: 120px;
	background: darken($darkpurple1, 10);
	bottom: calc(50% + 80px);
	border-top-right-radius: 10px;
	border-top-left-radius: 10px;
	overflow: hidden;
	
	&.scanning {
		animation: scanning .5s ease infinite alternate;
	}
	
	&:before {
		content: '';
		position: absolute;
		width: 10px;
		height: 100%;
		background: rgba(0,0,0,.1);
		box-shadow: 12px 0 0 0 rgba(0,0,0,.1),
			24px 0 0 0 rgba(0,0,0,.1),
			36px 0 0 0 rgba(0,0,0,.1),
			48px 0 0 0 rgba(0,0,0,.1),
			60px 0 0 0 rgba(0,0,0,.1),
			72px 0 0 0 rgba(0,0,0,.1),
			84px 0 0 0 rgba(0,0,0,.1),
			96px 0 0 0 rgba(0,0,0,.1),
			108px 0 0 0 rgba(0,0,0,.1),
			120px 0 0 0 rgba(0,0,0,.1),
			132px 0 0 0 rgba(0,0,0,.1),
			144px 0 0 0 rgba(0,0,0,.1);
	}
}

.hide {
	position: absolute;
	margin: auto;
	width: 75px;
	background: $grey;
	height: 120px;
	bottom: calc(50% + 80px);;
	left: 0;
	right: 226px;
	z-index: 3;
	box-shadow: 225px 0 0 0 $grey;
	
	&:before {
		content: '';
		position: absolute;
		width: 150px;
		height: 120px;
		top: 0;
		left: 75px;
		background: rgba(0,0,0,.5);
		border-top-right-radius: 10px;
		border-top-left-radius: 10px;
	}
}

.box {
	position: absolute;
	margin: auto;
	width: 80px;
	height: 80px;
	background: $bag;
	bottom: calc(50% + 80px);
	left: 0;
	right: 600px;
	z-index: 1;
	font-family: 'Share Tech Mono', monospace;
	text-align: center;
	color: darken($bag, 20);
	padding-top: 5px;
	font-size: 14px;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	
	p {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	
	.user {
		position: absolute;
		margin: auto;
		width: 40px;
		height: 30px;
		bottom: 0;
		left: 0;
		right: 0;
		background: $blue;
		border-top-right-radius: 20px;
		border-top-left-radius: 20px;
		opacity: 0;
		
		&:before {
			content: '';
			position: absolute;
			left: 2px;
			top: -34px;
			width: 34px;
			height: 35px;
			border-radius: 50%;
			background: inherit;
		}
	}
	
	&.scanned {
		background: transparentize($bag, .8);
		box-shadow: inset 0 0 0 2px $bag;
		text-indent: -99999px;
		
		.user {
			opacity: 1;
		}
	}
}

@keyframes scanning {
	from {
		background: darken($darkpurple1, 15);
	}
	to {
		background: darken($darkpurple1, 5);
	}
}

</style>