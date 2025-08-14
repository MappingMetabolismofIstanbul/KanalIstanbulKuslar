
var config = {
    // style: 'mapbox://styles/mapbox/streets-v12',
    // leave commented to use Mapbox Standard Style
    style: 'mapbox://styles/dogatmn/cm4v9fem6000p01sf12f769y5/draft',
    accessToken: 'pk.eyJ1IjoiZG9nYXRtbiIsImEiOiJjbHlyMTJmcXgwMjQ3MmtzbTRsdm1pejdsIn0.vcEjL7lt8OoOPMP5o1PM6g',
    showMarkers: false,
    markerColor: '#ff70ab',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: '#ff70ab'
    },
    insetPosition: 'bottom-right',
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Kuşlar / Birds ',
    subtitle: '',
    byline: 'BAP_Mapping Metabolism of Istanbul_Interactive Mapping / MEF AAP_027',
    footer: 'BAP_Mapping Metabolism of Istanbul_Interactive Mapping / MEF AAP_027',
    chapters: [
        {
            id: '1',
            alignment: 'centered',
            hidden: false,
            title: '',
            image: '',
            description: '',
            location: {
               center: [28.670,41.226],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
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
            id: '2',
            alignment: 'centered',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/5gVwbmG7/MEF-AAP-027-BAP-PART-II-2025-07-31-10-20-44.png',
            description: '',
            location: {
              center: [28.670,41.226],
                zoom: 12,
                pitch: 40,
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
          
        },
        {
            id: '3',
            alignment: 'centered',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/wN2Jy8R5/MEF-AAP-027-BAP-PART-II-2025-08-01-08-18-26.png',
            description: '',
            location: {
                 center: [28.670,41.226],
                zoom: 12,
                pitch: 40,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
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
            id: '4',
            alignment: 'left',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/hRbHDwb7/MEF-AAP-027-BAP-PART-II-2025-07-31-12-51-02.png',
            description: '',
            location: {
                 center: [28.670,41.226],
                zoom: 12,
                pitch: 40,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
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
            id: '5',
            alignment: 'centered',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/mC5XySd0/MEF-AAP-027-BAP-PART-II-2025-08-01-08-22-41.png',
            description: '',
            location: {
                 center: [28.670,41.226],
                zoom: 12,
                pitch: 40,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
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
            id: '6',
            alignment: 'centered',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/84xcbvX3/MEF-AAP-027-BAP-PART-II-2025-08-01-08-44-32.png',
            description: '',
            location: {
                 center: [28.670,41.226],
                zoom: 12,
                pitch: 40,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
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
    ]
};
