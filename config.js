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
            id: 'opening',
            alignment: 'centered',
            hidden: false,
            title: 'The Color Purple',
            image: 'https://raw.githubusercontent.com/doriaguadagnoli/all_map_data/main/color_purple_cover.jpg',
            description: 'First, we will inspect the southern economic exchanges between the women in <em>The Color Purple</em>',
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
            description: 'Shug Avery purchases a car in Memphis. Although it is never explicitly stated who purchases the car, we can only assume Shug buys it herself, as she has her own source of income. When comparing Shug to Celie, we can see how little the reign Celie is given over her life truly is. She purchases a few small items here and there until she begins to sell pants. However, this does not become possible until meeting Shug, who instills a new sense of independence and control in her.',
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
            description: 'Now, we will inspect <em>As I Lay Dying</em> and the economic implications in the novel',
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
            description: 'The Bundrens, the only white family we read about this semester, stay at a hotel during their travels to bury Mrs. Bundren. The economic exchange happening here is simply between the family and hotel. The hotel serves as the host of their emotional family experience. While they were surely not middle class, the Bundren family even being given money to stay in a hotel shows the wealth disparity between races in the south at this time. The black characters in The Color Purple or Salvage The Bones may have been in similar economic situations but were never lent money.',
            location: {
                center: [-41.47212410646295, 34.781162343274076], 
                zoom: 3,
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
            alignment: 'fully',
            hidden: false,
            title: 'End',
            image: './assets/color_purple_field.jpg',
            description: 'Close of the novel.',
            location: {
                center: [-41.47212410646295, 34.781162343274076], 
                zoom: 3,
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
            alignment: 'fully',
            hidden: false,
            title: 'End',
            image: './assets/color_purple_field.jpg',
            description: 'Close of the novel.',
            location: {
                center: [-41.47212410646295, 34.781162343274076], 
                zoom: 3,
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
            title: 'End',
            image: './assets/color_purple_field.jpg',
            description: 'Close of the novel.',
            location: {
                center: [-41.47212410646295, 34.781162343274076], 
                zoom: 3,
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
            alignment: 'fully',
            hidden: false,
            title: 'End',
            image: './assets/color_purple_field.jpg',
            description: 'Close of the novel.',
            location: {
                center: [-41.47212410646295, 34.781162343274076], 
                zoom: 3,
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
            alignment: 'fully',
            hidden: false,
            title: 'End',
            image: './assets/color_purple_field.jpg',
            description: 'Close of the novel.',
            location: {
                center: [-41.47212410646295, 34.781162343274076], 
                zoom: 3,
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
            alignment: 'fully',
            hidden: false,
            title: 'End',
            image: './assets/color_purple_field.jpg',
            description: 'Close of the novel.',
            location: {
                center: [-41.47212410646295, 34.781162343274076], 
                zoom: 3,
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
            image: './assets/color_purple_field.jpg',
            description: 'Close of the novel.',
            location: {
                center: [-41.47212410646295, 34.781162343274076], 
                zoom: 3,
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
