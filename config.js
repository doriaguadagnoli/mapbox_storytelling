var config = {
    style: 'mapbox://styles/doriaguadagnoli/cmabshev800nh01s0hk7o5zk6',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoiZG9yaWFndWFkYWdub2xpIiwiYSI6ImNtOThxdTB2eTA2MDAyaXB4eHF2a2xvOW4ifQ.4nsW7KCU5UODJ0wNdtyrow',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Economic Gender Disparity',
    subtitle: 'Exploring the Relationship Between Gender and Economic Exchange',
    byline: 'Doria Guadagnoli  - ENG 355  -  Dr. Burgers',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'intro',
            alignment: 'fully',
            hidden: false,
            title: 'Thesis',
            image: 'https://raw.githubusercontent.com/doriaguadagnoli/all_map_data/main/Screenshot_collage_.jpg',
            description: 'thesis here',
            location: {
                center: [-89.48166198038979, 34.28439371230351], 
                zoom: 4,
                pitch: 30,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }, 
        {
            id: 'opening',
            alignment: 'centered',
            hidden: false,
            title: 'The Color Purple',
            image: 'https://raw.githubusercontent.com/doriaguadagnoli/all_map_data/main/color_purple_cover.jpg',
            description: 'First, we will inspect the southern economic exchanges between the women in <em>The Color Purple</em>.',
            location: {
                center: [-90.3150946, 38.6605671],
                zoom: 4,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'chapter-one',
            alignment: 'right',
            hidden: false,
            title: 'The Green Home',
            description: 'Sofia is paid by Mayor Green for the work she does in the house. This is one of the only economic exchanges we see between black and white folk throughout the entirety of the novel. Specifically, payment from a white man to a black woman. This particular exchange is interesting considering Sofia’s path to actually working for the Greens. After their altercation and Sofia’s forced employment with the Greens, she is stuck in an odd place, not being able to leave her employment with them but having no place else to go. This specific exchange and situation shows the power dynamic that persists still between the two communities.',
            location: {
                center: [-83.557033670263, 32.999402580951326], 
                zoom: 8.00,
                pitch: 60,
                bearing: -43.2
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-two',
            alignment: 'left',
            hidden: false,
            title: 'Childhood Home of Celie',
            description: 'The childhood home of Celie is the site of a transaction between black men. While it may be an insignificant transfer of money in the story, mapping this event and other exchanges at her home illustrates how powerless Celie was in her own home. It was only until Celie left home that she finally had the ability to make purchases herself. Her purchases, however, were only available through connections. It was rare that Celie made a purchase separate from her connections to Shug or Albert until the end of the book.',
            location: {
                center: [-83.2850089234675, 33.02050024570996], 
                zoom: 6.00,
                pitch: 45.0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-three',
            alignment: 'right',
            hidden: false,
            title: 'Shug Avery and Her Car',
            description: '<q><em>And this is my wedding present to us, say Shug. Brand new, she say</q>(Walker, 107).</em><br>Shug Avery purchases a car in Memphis as a wedding present to Grady and herself. When comparing Shug to Celie, we can see how little the reign Celie is given over her life truly is. Celie purchases a few small items here and there until she begins to sell pants. However, this does not become possible until meeting Shug, who instills a new sense of independence and control in her. Shug being able to buy a car for her husband and herself is a clear indicator of the agency and fortune she has in her own life. Comparatively to Celie, and even Mr., this makes for a stark contrast.',
            location: {
                center: [-90.06958208625237, 35.15221330647191], 
                zoom: 7.50,
                pitch: 30,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        { id: 'chapter-four',
            alignment: 'fully',
            hidden: false,
            title: 'As I Lay Dying',
            image: 'https://raw.githubusercontent.com/doriaguadagnoli/all_map_data/main/as_i_lay_dying.jpg',
            description: 'Now, we will inspect <em>As I Lay Dying</em> and the economic implications in the novel.',
            location: {
                center: [-89.49127236475411, 34.28465033326839], 
                zoom: 5,
                pitch: 30,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {  id: 'chapter-five',
            alignment: 'left',
            hidden: false,
            title: 'The Bundrens In Jefferson',
            description: 'The Bundrens, the only white family we read about this semester, stay at a hotel during their travels to bury Mrs. Bundren. The economic exchange happening here is simply between the family and hotel. The hotel serves as the host of their emotional family experience. While they were surely not middle class, the Bundren family even being given money to stay in a hotel shows the wealth disparity between races in the south at this time. The black characters in <em>The Color Purple</em> or <em>Salvage The Bones</em> may have been in similar economic situations but were never lent money.',
            location: {
                center: [-89.51788515537622, 34.36817121721822], 
                zoom: 8,
                pitch: 30,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }, 
        {  id: 'chapter-six',
            alignment: 'right',
            hidden: false,
            title: 'Bundren Home',
            description: 'The Bundren home and farm is where the bulk of the novel takes place. While a great deal of many of our novel\'s settings take place in a family home, a distinct feature of the Bundren\’s stagnant nature comes from their financial gain in their land itself. The Bundren family cultivates their land for profit, while Janie and Teacake in <em>Their Eyes Were Watching God</em> must travel to cultivate land they do not own for profit. In <em>The Color Purple</em>, Mr. is able to cultivate his own land, but eventually loses it. Celie finally gains her own land but, being a woman who now has other avenues to success, chooses to sell pants instead of continuing the strenuous work that goes into land upkeep. Celie\’s ability to choose switching her profession versus the Bundren\’s need to be stationary tells the story of progression in the south.',
            location: {
                center: [-89.48848661057376, 34.28249827482276], 
                zoom: 7,
                pitch: 30,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {  id: 'chapter-seven',
            alignment: 'left',
            hidden: false,
            title: 'Dewey Dell and the Jefferson Drugstore',
            description: '<q><em>It was her eyes: kind of dumb and hopeful and sullenly willing to be disappointed all at the same time</q>(Faulkner, 200).</em><br>The Jefferson Drugstore is the location of Dewey Dell\’s abortion attempt. This attempt goes terribly wrong when the pharmacy boy gives her fake abortion pills and then rapes her. While this location is technically just classified as a movement because there is no monetary gain for the pharmacy, I would argue that Dewey Dell\’s exchange of her body counts for some type of exchange. This “exchange” takes place because of a power imbalance being enforced upon a naive, vulnerable young woman in need. This situation seems similar in nature to Esch\’s “exchange” with Manny in <em>Salvage The Bones</em>, her body for his love. I see these similarities as a testament to naivety in girlhood transcending race and pointing to the patriarchal structure.',
            location: {
                center: [-89.51844772251566, 34.3655557208826], 
                zoom: 9,
                pitch: 30,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }, 
        {  id: 'chapter-eight',
            alignment: 'fully',
            hidden: false,
            title: 'Their Eyes Were Watching God',
            image: 'https://raw.githubusercontent.com/doriaguadagnoli/all_map_data/5a4b8101ba7e0ad69732a75940a9e5ad5631e1cd/tewwg_.jpg',
            description: 'Lastly, we will look at <em>Their Eyes Were Watchnig God</em> and this novel\'s implications.',
            location: {
                center: [-81.39224619001222, 28.54026337989474], 
                zoom: 6,
                pitch: 30,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }, 
        {  id: 'chapter-nine',
            alignment: 'right',
            hidden: false,
            title: 'Tea Cake\'s Car Purchase',
            description: '<q><em>But the fourth day after he came in the afternoon driving a battered car</q>(Hurston, 108).</em><br>In Tea Cake\’s attempt to woo Janie, he buys a car to <q>Haul her off in</q>. Tea Cake purchasing the battered car was the first time she had felt wanted since Jodie was sweet with her. Tea Cake used his hard earned money to win her over. This tactic seemingly worked, as Janie attended the Eatonville picnic with him and, shortly after, fled town with him to live life on the Muck. This purchase can be compared to Shug\’s car purchase. Tea Cake can only afford a beater car which is bought to impress someone, whereas Shug is able to buy a brand new car simply for herself. These two purchases, made in opposite ends of the south, contrast each other in nature and make us as readers look into our own preconceived notions having to do with Black women and their <q>lower</q> levels of agency at this time.',
            location: {
                center: [-81.38643808791495, 28.618579170446417], 
                zoom: 7,
                pitch: 30,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }, 
        {  id: 'chapter-ten',
            alignment: 'left',
            hidden: false,
            title: 'Tea Cake\'s Spending Spree',
            description: 'After finding Janie\’s $200 during a stop-over on their way to the Muck, Tea Cake took it upon himself to host a free feast for all at a Jacksonville railroad and gamble the rest away without Janie\’s knowledge. Although Tea Cake eventually gambled and won the money back, Janie was not concerned about this. Instead, she was upset that Tea Cake did not invite her to partake in the festivities.<br>Janie was in an unfamiliar city without her man or money. She sat and waited for his return for multiple days, only to be met with his casual return and a lively story explaining exactly how he spent her money. This entire exchange made me feel sorry for Janie and how little respect she is willing to receive just for attention and care, pointing to her low self value despite her having a way to employ her own agency (her money).',
            location: {
                center: [-81.67746076856982, 29.992904183688125], 
                zoom: 8,
                pitch: 30,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }, 
        {  id: 'chapter-ten',
            alignment: 'right',
            hidden: false,
            title: 'Doctor Simmons Visits Tea Cake',
            description: 'When Tea Cake begins to develop symptoms from his dog bite, Janie calls Dr. Simmons, the white doctor on the Muck. Janie facilitates this doctor\'s visit against Tea Cake\’s liking and presumably pays for it. Janie even implies to Dr. Simmons that she is willing to pay whatever is necessary to get him healed and back to his old self. In this part of the novel, not only is Janie playing the role of a caring partner but, with their age difference and wisdom levels, she almost takes on a maternal role. Tea Cake\’s resistance to Janie\’s help while Janie pays for his check up shows her commitment to him and that money is no object, and showing Tea Cake\’s unwillingness to trust and believe Janie.',
            location: {
                center: [-80.44334557182601, 26.834751662280585], 
                zoom: 9,
                pitch: 30,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        { id: 'chapter-eleven',
            alignment: 'left',
            hidden: false,
            title: 'Janie and Tea Cake\'s Shooting',
            description: 'Janie and Tea Cake\’s shooting took place on the muck, a little out of the way from their home. Prior to their shooting practice, they had to travel to Palm Beach to get some supplies. Through her practice, Janie eventually surpassed most men in the Muck and even Tea Cake in her abilities in getting a clean shot.<br>Something unique about Janie\’s character was her possession of more money than her romantic counterpart, but her ability to save it. Janie and Tea Cake\’s trip into Palm beach to <q>spend some money<q> of theirs was probably funded by Tea Cake. While Janie\’s money was spent without her permission when Tea Cake took it, and she ended up spending her money on Tea Cake\’s doctor check up, she did not spend as much money as one might assume being that she was technically more financially secure than Tea Cake. I interpreted this as the patriarchal structure of chivalry in the south serving her.',
            location: {
                center: [-80.44334557182601, 26.834751662280585], 
                zoom: 10,
                pitch: 30,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },  
        {  id: 'Conclusion',
            alignment: 'fully',
            hidden: false,
            title: 'Conclusion',
            image: 'https://raw.githubusercontent.com/doriaguadagnoli/all_map_data/main/Screenshot_collage_.jpg',
            description: 'In conclusion...',
            location: {
                center: [-89.48166198038979, 34.28439371230351], 
                zoom: 4,
                pitch: 30,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
