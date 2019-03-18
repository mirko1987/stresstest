var app = new Vue({

	el: "#app",

	data: {

		searched: "",
		city: []


	},

	methods: {

		getData: function (url) {
			fetch("https://api.myjson.com/bins/i8run", {
					method: "GET",
				})
				.then(function (data) {
					return data.json();
				})
				.then(function (myData) {
					app.city = myData.list;
					console.log(app.searched);
				})
		},
		ciudades: function (name) {
			var fotociudad = "";
			if (name == "Yafran") {
				fotociudad = "https://www.temehu.com/pictures3/p3/yefren-ghasru-the-castle.jpg";
			}
			if (name == "Tripoli") {
				fotociudad = "https://www.temehu.com/pictures2/p2/municipal-beach-tripoli-2.jpg";
			}
			if (name == "Zuwarah") {
				fotociudad = "https://data.whicdn.com/images/95700210/large.jpg";
			}
			if (name == "Sabratah") {
				fotociudad = "https://upload.wikimedia.org/wikipedia/commons/a/a4/Sabratah.jpg";
			}
			
			if (name == "Gharyan") {
				fotociudad = "https://st3.depositphotos.com/1003891/15383/i/1600/depositphotos_153837126-stock-photo-panorama-of-a-valley-in.jpg";
			}
			if (name == "Sabratah") {
				fotociudad = "https://upload.wikimedia.org/wikipedia/commons/a/a4/Sabratah.jpg";
			}
			if (name == "Zawiya") {
				fotociudad = "https://upload.wikimedia.org/wikipedia/commons/a/a4/Sabratah.jpg";
			}
			if (name == "Tarhuna") {
				fotociudad = "https://www.icomos.org/images/media/images/5748/_thumb2/pb150042.JPG";
			}
			if (name == "Masallatah") {
				fotociudad = "https://pbs.twimg.com/media/DBHwEEmXcAAzZIR.jpg";
			}
			if (name == "Al Khums") {
				fotociudad = "https://media-cdn.tripadvisor.com/media/photo-s/0e/1a/cb/33/photo3jpg.jpg";
			}
			if (name == "Zlitan") {
				fotociudad = "https://media-cdn.tripadvisor.com/media/photo-s/02/e5/87/9d/zliten.jpg";
			}
			if (name == "Birkirkara") {
				fotociudad = "http://www.malta.com/media/en/about-malta/city-village/birkirkara/st-anthony-and-st-catherine-s-chapel-in-birkirkara.jpg";
			}
			if (name == "Ragusa") {
				fotociudad = "https://st.depositphotos.com/1222104/2975/i/950/depositphotos_29756275-stock-photo-view-of-beautiful-village-ragusa.jpg";
			}
			if (name == "Pozzallo") {
				fotociudad = "https://st2.depositphotos.com/6121818/11720/i/950/depositphotos_117205252-stock-photo-pozzallo-beach-sicily-lifeguard-tower.jpg";
			}
			if (name == "Modica") {
				fotociudad = "https://upload.wikimedia.org/wikipedia/commons/2/2a/Castello_Modica.jpg";
			}
			if (name == "Rosolini") {
				fotociudad = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/2008-03-Pasqua-Sicilia_048.jpg/300px-2008-03-Pasqua-Sicilia_048.jpg";
			}
			return fotociudad;
		}



	},

	computed: {

		ciudad: function () {
			var searchcity = [];
			if (this.searched == "city") {
				return this.searched;
			} else {
				for (var i = 0; i < this.city.length; i++) {
					if (this.city[i].name.toLowerCase().includes(this.searched.toLowerCase())) {
						document.getElementById("noresult").style.display = "none";
						searchcity.push(this.city[i]);
					} else if (searchcity.length === 0) {
						document.getElementById("noresult").style.display = "block";
					}
				}
				return searchcity;
			}
		}

	},

	created: function () {
		this.getData();
		document.getElementById("noresult").style.display = "none";
	}
})
