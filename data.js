function generateDateArray() {
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dayAfterTomorrow = new Date();
  dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2);

  const options = { day: 'numeric', month: 'long' };
  const currentDate = today.toLocaleDateString('en-US', options);
  const nextDay = tomorrow.toLocaleDateString('en-US', options);
  const dayAfterNext = dayAfterTomorrow.toLocaleDateString('en-US', options);

  const dateArray = [
    `${today.getDate()} Today`,
    nextDay,
    dayAfterNext
  ];
  
  return dateArray;
}

let dates=generateDateArray();
const moviesData = [
    {
      id: 1,
      title: 'Zara Hatke Zara Bachke',
      genre: ['Romance', 'Drama'],
      director: 'Aditya Chopra',
      cast: ['Vicky Kausal', 'Sara Ali Khan'],
      duration: 189,
      rating: 8.2,
      synopsis: 'Kapil and Somya are a happily married couple from Indore who live in a joint family and decide to get a divorce one fine day. Things don`t go as planned as their family gets to know of it, and thus begins a comedy of errors.',
      image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ni42LzEwICAzOC42SyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00359644-scgjqlnukg-portrait.jpg',
      language:['Hindi', 'Marathi', 'English'],
      cities:['Mumbai','NCR', 'Bengaluru'],
      formats:['2D', '2D SCREEN X']
    },
    {
      id: 2,
      title: 'Spider-Man: Across the Spider-Verse',
      genre: ['Action', 'Drama', 'Animation'],
      director: "",
      cast: ['Shameik Moore'],
      duration: 159,
      rating: 8.5,
      synopsis: 'Miles Morales returns for the next chapter of the Spider-Verse saga, Spider-Man: Across the Spider-Verse. After reuniting with Gwen Stacy, Brooklyns full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must redefine what it means to be a hero so he can save the people he loves most.',
      image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC41LzEwICAxOC4xSyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00347275-uzagmfsmyy-portrait.jpg',
      language:['Hindi', 'Telugu', 'Tamil', 'English'],
      cities:['Mumbai','NCR', 'Kolkata'],
      formats:['2D', '2D SCREEN X', 'ICE', 'MX4D', 'IMAX 2D']
    },
    {
        id: 3,
        title: 'The Kerala Story',
        genre: ['Action', 'Drama'],
        director: "",
        cast: ['Adah Sharma'],
        duration: 140,
        rating: 8.9,
        synopsis: 'A spine-chilling, never told before true story - revealing a dangerous conspiracy that has been hatched against India. The Kerala Story is a compilation of the true stories of three young girls from different parts of Kerala. The truth shall set us free! Thousands of innocent women have been systematically converted, radicalized & their lives destroyed. It`s their side of the story.',
        image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC45LzEwICAyMTguMUsgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00343918-vbbakgpnwq-portrait.jpg',
        language:['Hindi', 'Telugu', 'Malyalam', 'English'],
        cities:['Mumbai','NCR', 'Pune'],
        formats:['2D', '2D SCREEN X', 'IMAX 2D']
      },
      {
        id: 4,
        title: 'Fast X',
        genre: ['Action', 'Drama', 'Romance', 'Thriller', 'Crime'],
        director: "",
        cast: [''],
        duration: 140,
        rating: 8.9,
        synopsis: 'Dom Toretto and his family must confront a terrifying new enemy who`s fueled by revenge.',
        image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC44LzEwICA1Ny41SyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00122562-dgpxgaudlw-portrait.jpg',
        language:['Hindi', 'Telugu', 'Malyalam', 'English'],
        cities:['Mumbai','NCR', 'Bengaluru', 'Pune'],
        formats:['2D', '2D SCREEN X', 'ICE', 'MX4D', 'IMAX 2D']
      },
      {
        id: 5,
        title: 'Transformers: Rise of the Beasts',
        genre: ['Action', 'Thriller', 'Adventure'],
        director: "",
        cast: [''],
        duration: 140,
        rating: 8.9,
        synopsis: 'Transformers: Rise of the Beasts will take audiences on a `90s globetrotting adventure and introduce the Maximals, Predacons, and Terrorcons to the existing battle on earth between Autobots and Decepticons.',
        image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-NjkuN0sgTGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00346319-skbjrhetjw-portrait.jpg',
        language:['Hindi', 'Telugu', 'Malyalam', 'English'],
        cities:['Mumbai','NCR', 'Bengaluru', 'Hyderabad'],
        formats:['2D', '2D SCREEN X', 'ICE', 'MX4D', 'IMAX 2D']
      },
      {
        id: 6,
        title: 'IB71',
        genre: ['Action', 'Period','Drama', 'Adventure'],
        director: "",
        cast: ['Vidyut Jammwal'],
        duration: 119,
        rating: 8.7,
        synopsis: 'IB71, a patriotic spy thriller, is an untold story based on true events where IB agent Dev Jammwal (Vidyut Jammwal) is on a top secret mission to save the nation.',
        image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC43LzEwICAxNS4zSyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00312966-pknwdghdwb-portrait.jpg',
        language:['Hindi', 'Telugu', 'Malyalam', 'English'],
        cities:['Mumbai','NCR', 'Bengaluru','Noida'],
        formats:['2D', '2D SCREEN X', 'IMAX 2D']
      },
      {
        id: 7,
        title: 'Guardian of the Galaxy Vol. 3',
        genre: ['Action', 'Period', 'Drama','Comedy','Adventure'],
        director: "",
        cast: ['Chris Pratt'],
        duration: 119,
        rating: 8.9,
        synopsis: 'Our beloved band of misfits are settling into life on Knowhere. But it isn`t long before their lives are upended by the echoes of Rocket`s turbulent past. Peter Quill, still reeling from the loss of Gamora, must rally his team around him on a dangerous mission to save Rocket`s life - a mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.',
        image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC45LzEwICA0OS40SyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00310794-twvaltqvdc-portrait.jpg',
        language:['Hindi', 'Telugu', 'Tamil', 'English'],
        cities:['Mumbai','NCR', 'Bengaluru', 'Ahmedabad'],
        formats:['2D', '2D SCREEN X', 'ICE', 'MX4D', 'IMAX 2D']
      },
  
      {
        id: 8,
        title: 'Pareshan',
        genre: ['Comedy', 'Drama'],
        director: "",
        cast: ['Thiruveer', 'Pavani Karanam'],
        duration:152,
        rating: 7.9,
        synopsis: 'Set up in the backdrop of Singareni and Coalaries, the movie sheds light on troubles that arise between friends, family and lovers.',
        image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny45LzEwICAySyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00359501-pdnlfwtdrd-portrait.jpg',
        language:['Hindi', 'Telugu', 'Tamil', 'English'],
        cities:['Mumbai','NCR', 'Jaipur'],
        formats:['2D']
      },
      {
        id: 9,
        title: '2018',
        genre: ['Thriller', 'Drama'],
        director: "",
        cast: ['Tovino Thomas', 'Kunchacko Boban'],
        duration:150,
        rating: 8.4,
        synopsis: 'A thriller set in the backdrop of 2018 Kerala Floods. It unfolds the lives of people from all walks of life who faced catastrophic consequences and the collective efforts put in by the brave people to survive the calamity.',
        image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC40LzEwICA3LjVLIFZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00360114-lskrefpxbk-portrait.jpg',
        language:['Telugu', 'Tamil', 'Malyalam'],
        cities:['Mumbai','Chennai', 'Bengaluru'],
        formats:['2D']
      },
      {
        id: 10,
        title: 'Veeran',
        genre: ['Action','Fantasy', 'Drama'],
        director: "",
        cast: ['Tovino Thomas', 'Kunchacko Boban'],
        duration:150,
        rating: 8.4,
        synopsis: 'A thriller set in the backdrop of 2018 Kerala Floods. It unfolds the lives of people from all walks of life who faced catastrophic consequences and the collective efforts put in by the brave people to survive the calamity.',
        image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ni4zLzEwICAzLjFLIFZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00362383-kwshutdsmq-portrait.jpg',
        language:['Tamil'],
        cities:['Mumbai','Chennai', 'Bengaluru'],
        formats:['2D']
      },
    
  ];

  const theatersData = [
    {
      id: 1,
      name: 'PVR Cinemas',
      location: 'Mumbai',
      capacity: 150,
      ticketPrices:[420, 250],
      seats:[
        ['A_B_01', 'A_B_02', 'A_B_03', 'A_A_04', 'A_A_05', 'A_A_06', 'A_B_07', 'A_A_08', 'A_B_09', 'A_A_10', 'A_A_11', 'A_B_12', 'A_A_13', 'A_B_14', 'A_A_15', 'A_A_16', 'A_A_17', 'A_A_18', 'A_B_19', 'A_B_20', 'A_A_21', 'A_B_22', 'A_A_23', 'A_A_24', 'A_B_25', 'A_B_26', 'A_A_27', 'A_A_28', 'A_B_29', 'A_A_30', 'A_B_31', 'A_B_32'],
        ['B_B_01', 'B_B_02', 'B_B_03', 'B_A_04', 'B_N_05', 'B_N_06', 'B_B_07', 'B_A_08', 'B_B_09', 'B_A_10', 'B_B_11', 'B_B_12', 'B_A_13', 'B_B_14', 'B_A_15', 'B_N_16', 'B_N_17', 'B_N_18', 'B_B_19', 'B_B_20', 'B_A_21', 'B_B_22', 'B_A_23', 'B_A_24', 'B_B_25', 'B_B_26', 'B_N_27', 'B_N_28', 'B_B_29', 'B_A_30', 'B_A_31', 'B_A_32'],
        ['C_A_01', 'C_A_02', 'C_B_03', 'C_A_04', 'C_N_05', 'C_N_06', 'C_B_07', 'C_A_08', 'C_B_09', 'C_A_10', 'C_B_11', 'C_B_12', 'C_A_13', 'C_B_14', 'C_A_15', 'C_N_16', 'C_N_17', 'C_N_18', 'C_B_19', 'C_B_20', 'C_A_21', 'C_B_22', 'C_A_23', 'C_A_24', 'C_B_25', 'C_B_26', 'C_N_27', 'C_N_28', 'C_B_29', 'C_A_30', 'C_B_31', 'C_B_32'],
        ['D_A_01', 'D_A_02', 'D_B_03', 'D_A_04', 'D_N_05', 'D_N_06', 'D_B_07', 'D_A_08', 'D_B_09', 'D_A_10', 'D_B_11', 'D_B_12', 'D_A_13', 'D_B_14', 'D_A_15', 'D_N_16', 'D_N_17', 'D_N_18', 'D_B_19', 'D_B_20', 'D_A_21', 'D_B_22', 'D_A_23', 'D_A_24', 'D_B_25', 'D_B_26', 'D_N_27', 'D_N_28', 'D_B_29', 'D_A_30', 'D_B_31', 'D_B_32'],
        ['E_A_01', 'E_A_02', 'E_B_03', 'E_A_04', 'E_N_05', 'E_N_06', 'E_B_07', 'E_A_08', 'E_B_09', 'E_A_10', 'E_B_11', 'E_B_12', 'E_A_13', 'E_B_14', 'E_A_15', 'E_N_16', 'E_N_17', 'E_N_18', 'E_B_19', 'E_B_20', 'E_A_21', 'E_B_22', 'E_A_23', 'E_A_24', 'E_B_25', 'E_B_26', 'E_N_27', 'E_N_28', 'E_B_29', 'E_A_30', 'E_B_31', 'E_B_32'],
        ['F_A_01', 'F_A_02', 'F_B_03', 'F_A_04', 'F_N_05', 'F_N_06', 'F_B_07', 'F_A_08', 'F_B_09', 'F_A_10', 'F_B_11', 'F_B_12', 'F_A_13', 'F_B_14', 'F_A_15', 'F_N_16', 'F_N_17', 'F_N_18', 'F_B_19', 'F_B_20', 'F_A_21', 'F_B_22', 'F_A_23', 'F_A_24', 'F_B_25', 'F_B_26', 'F_N_27', 'F_N_28', 'F_B_29', 'F_A_30', 'F_B_31', 'F_B_32'],
        ['G_A_01', 'G_A_02', 'G_B_03', 'G_A_04', 'G_N_05', 'G_N_06', 'G_B_07', 'G_A_08', 'G_B_09', 'G_A_10', 'G_B_11', 'G_B_12', 'G_A_13', 'G_B_14', 'G_A_15', 'G_N_16', 'G_N_17', 'G_N_18', 'G_B_19', 'G_B_20', 'G_A_21', 'G_B_22', 'G_A_23', 'G_A_24', 'G_B_25', 'G_B_26', 'G_N_27', 'G_N_28', 'G_B_29', 'G_A_30', 'G_B_31', 'G_B_32'],
        ['H_A_01', 'H_A_02', 'H_B_03', 'H_A_04', 'H_N_05', 'H_N_06', 'H_B_07', 'H_A_08', 'H_B_09', 'H_A_10', 'H_B_11', 'H_B_12', 'H_A_13', 'H_B_14', 'H_A_15', 'H_N_16', 'H_N_17', 'H_N_18', 'H_B_19', 'H_B_20', 'H_A_21', 'H_B_22', 'H_A_23', 'H_A_24', 'H_B_25', 'H_B_26', 'H_N_27', 'H_N_28', 'H_B_29', 'H_A_30', 'H_B_31', 'H_B_32'],
        ['I_A_01', 'I_A_02', 'I_B_03', 'I_A_04', 'I_N_05', 'I_N_06', 'I_B_07', 'I_A_08', 'I_B_09', 'I_A_10', 'I_B_11', 'I_B_12', 'I_A_13', 'I_B_14', 'I_A_15', 'I_N_16', 'I_N_17', 'I_N_18', 'I_B_19', 'I_B_20', 'I_A_21', 'I_B_22', 'I_A_23', 'I_A_24', 'I_B_25', 'I_B_26', 'I_N_27', 'I_N_28', 'I_B_29', 'I_A_30', 'I_B_31', 'I_B_32'],
        ['J_A_01', 'J_A_02', 'J_B_03', 'J_A_04', 'J_N_05', 'J_N_06', 'J_B_07', 'J_A_08', 'J_B_09', 'J_A_10', 'J_B_11', 'J_B_12', 'J_A_13', 'J_B_14', 'J_A_15', 'J_N_16', 'J_N_17', 'J_N_18', 'J_B_19', 'J_B_20', 'J_A_21', 'J_B_22', 'J_A_23', 'J_A_24', 'J_B_25', 'J_B_26', 'J_N_27', 'J_N_28', 'J_B_29', 'J_A_30', 'J_B_31', 'J_B_32'],
        ['K_A_01', 'K_A_02', 'K_B_03', 'K_A_04', 'K_N_05', 'K_N_06', 'K_B_07', 'K_A_08', 'K_B_09', 'K_A_10', 'K_B_11', 'K_B_12', 'K_A_13', 'K_B_14', 'K_A_15', 'K_N_16', 'K_N_17', 'K_N_18', 'K_B_19', 'K_B_20', 'K_A_21', 'K_B_22', 'K_A_23', 'K_A_24', 'K_B_25', 'K_B_26', 'K_N_27', 'K_N_28', 'K_B_29', 'K_A_30', 'K_B_31', 'K_B_32'],
        ['L_A_01', 'L_A_02', 'L_B_03', 'L_A_04', 'L_N_05', 'L_N_06', 'L_B_07', 'L_A_08', 'L_B_09', 'L_A_10', 'L_B_11', 'L_B_12', 'L_A_13', 'L_B_14', 'L_A_15', 'L_N_16', 'L_N_17', 'L_N_18', 'L_B_19', 'L_B_20', 'L_A_21', 'L_B_22', 'L_A_23', 'L_A_24', 'L_B_25', 'L_B_26', 'L_N_27', 'L_N_28', 'L_B_29', 'L_A_30', 'L_B_31', 'L_B_32'],
        ['M_A_01', 'M_A_02', 'M_B_03', 'M_A_04', 'M_N_05', 'M_N_06', 'M_B_07', 'M_A_08', 'M_B_09', 'M_A_10', 'M_B_11', 'M_B_12', 'M_A_13', 'M_B_14', 'M_A_15', 'M_N_16', 'M_N_17', 'M_N_18', 'M_B_19', 'M_B_20', 'M_A_21', 'M_B_22', 'M_A_23', 'M_A_24', 'M_B_25', 'M_B_26', 'M_N_27', 'M_N_28', 'M_B_29', 'M_A_30', 'M_B_31', 'M_B_32'],
        ['N_A_01', 'N_A_02', 'N_B_03', 'N_A_04', 'N_N_05', 'N_N_06', 'N_B_07', 'N_A_08', 'N_B_09', 'N_A_10', 'N_B_11', 'N_B_12', 'N_A_13', 'N_B_14', 'N_A_15', 'N_N_16', 'N_N_17', 'N_N_18', 'N_B_19', 'N_B_20', 'N_A_21', 'N_B_22', 'N_A_23', 'N_A_24', 'N_B_25', 'N_B_26', 'N_N_27', 'N_N_28', 'N_B_29', 'N_A_30', 'N_B_31', 'N_B_32']
      ]
    },
    {
      id: 2,
      name: 'INOX Cinemas',
      location: 'NCR',
      capacity: 180,
      ticketPrices:[420, 250],
      seats:[
        ['A_B_01', 'A_B_02', 'A_B_03', 'A_A_04', 'A_A_05', 'A_A_06', 'A_B_07', 'A_A_08', 'A_B_09', 'A_A_10', 'A_A_11', 'A_B_12', 'A_A_13', 'A_B_14', 'A_A_15', 'A_A_16', 'A_A_17', 'A_A_18', 'A_B_19', 'A_B_20', 'A_A_21', 'A_B_22', 'A_A_23', 'A_A_24', 'A_B_25', 'A_B_26', 'A_A_27', 'A_A_28', 'A_B_29', 'A_A_30', 'A_B_31', 'A_B_32'],
        ['B_B_01', 'B_B_02', 'B_B_03', 'B_A_04', 'B_N_05', 'B_N_06', 'B_B_07', 'B_A_08', 'B_B_09', 'B_A_10', 'B_B_11', 'B_B_12', 'B_A_13', 'B_B_14', 'B_A_15', 'B_N_16', 'B_N_17', 'B_N_18', 'B_B_19', 'B_B_20', 'B_A_21', 'B_B_22', 'B_A_23', 'B_A_24', 'B_B_25', 'B_B_26', 'B_N_27', 'B_N_28', 'B_B_29', 'B_A_30', 'B_A_31', 'B_A_32'],
        ['C_A_01', 'C_A_02', 'C_B_03', 'C_A_04', 'C_N_05', 'C_N_06', 'C_B_07', 'C_A_08', 'C_B_09', 'C_A_10', 'C_B_11', 'C_B_12', 'C_A_13', 'C_B_14', 'C_A_15', 'C_N_16', 'C_N_17', 'C_N_18', 'C_B_19', 'C_B_20', 'C_A_21', 'C_B_22', 'C_A_23', 'C_A_24', 'C_B_25', 'C_B_26', 'C_N_27', 'C_N_28', 'C_B_29', 'C_A_30', 'C_B_31', 'C_B_32'],
        ['D_A_01', 'D_A_02', 'D_B_03', 'D_A_04', 'D_N_05', 'D_N_06', 'D_B_07', 'D_A_08', 'D_B_09', 'D_A_10', 'D_B_11', 'D_B_12', 'D_A_13', 'D_B_14', 'D_A_15', 'D_N_16', 'D_N_17', 'D_N_18', 'D_B_19', 'D_B_20', 'D_A_21', 'D_B_22', 'D_A_23', 'D_A_24', 'D_B_25', 'D_B_26', 'D_N_27', 'D_N_28', 'D_B_29', 'D_A_30', 'D_B_31', 'D_B_32'],
        ['E_A_01', 'E_A_02', 'E_B_03', 'E_A_04', 'E_N_05', 'E_N_06', 'E_B_07', 'E_A_08', 'E_B_09', 'E_A_10', 'E_B_11', 'E_B_12', 'E_A_13', 'E_B_14', 'E_A_15', 'E_N_16', 'E_N_17', 'E_N_18', 'E_B_19', 'E_B_20', 'E_A_21', 'E_B_22', 'E_A_23', 'E_A_24', 'E_B_25', 'E_B_26', 'E_N_27', 'E_N_28', 'E_B_29', 'E_A_30', 'E_B_31', 'E_B_32'],
        ['F_A_01', 'F_A_02', 'F_B_03', 'F_A_04', 'F_N_05', 'F_N_06', 'F_B_07', 'F_A_08', 'F_B_09', 'F_A_10', 'F_B_11', 'F_B_12', 'F_A_13', 'F_B_14', 'F_A_15', 'F_N_16', 'F_N_17', 'F_N_18', 'F_B_19', 'F_B_20', 'F_A_21', 'F_B_22', 'F_A_23', 'F_A_24', 'F_B_25', 'F_B_26', 'F_N_27', 'F_N_28', 'F_B_29', 'F_A_30', 'F_B_31', 'F_B_32'],
        ['G_A_01', 'G_A_02', 'G_B_03', 'G_A_04', 'G_N_05', 'G_N_06', 'G_B_07', 'G_A_08', 'G_B_09', 'G_A_10', 'G_B_11', 'G_B_12', 'G_A_13', 'G_B_14', 'G_A_15', 'G_N_16', 'G_N_17', 'G_N_18', 'G_B_19', 'G_B_20', 'G_A_21', 'G_B_22', 'G_A_23', 'G_A_24', 'G_B_25', 'G_B_26', 'G_N_27', 'G_N_28', 'G_B_29', 'G_A_30', 'G_B_31', 'G_B_32'],
        ['H_A_01', 'H_A_02', 'H_B_03', 'H_A_04', 'H_N_05', 'H_N_06', 'H_B_07', 'H_A_08', 'H_B_09', 'H_A_10', 'H_B_11', 'H_B_12', 'H_A_13', 'H_B_14', 'H_A_15', 'H_N_16', 'H_N_17', 'H_N_18', 'H_B_19', 'H_B_20', 'H_A_21', 'H_B_22', 'H_A_23', 'H_A_24', 'H_B_25', 'H_B_26', 'H_N_27', 'H_N_28', 'H_B_29', 'H_A_30', 'H_B_31', 'H_B_32'],
        ['I_A_01', 'I_A_02', 'I_B_03', 'I_A_04', 'I_N_05', 'I_N_06', 'I_B_07', 'I_A_08', 'I_B_09', 'I_A_10', 'I_B_11', 'I_B_12', 'I_A_13', 'I_B_14', 'I_A_15', 'I_N_16', 'I_N_17', 'I_N_18', 'I_B_19', 'I_B_20', 'I_A_21', 'I_B_22', 'I_A_23', 'I_A_24', 'I_B_25', 'I_B_26', 'I_N_27', 'I_N_28', 'I_B_29', 'I_A_30', 'I_B_31', 'I_B_32'],
        ['J_A_01', 'J_A_02', 'J_B_03', 'J_A_04', 'J_N_05', 'J_N_06', 'J_B_07', 'J_A_08', 'J_B_09', 'J_A_10', 'J_B_11', 'J_B_12', 'J_A_13', 'J_B_14', 'J_A_15', 'J_N_16', 'J_N_17', 'J_N_18', 'J_B_19', 'J_B_20', 'J_A_21', 'J_B_22', 'J_A_23', 'J_A_24', 'J_B_25', 'J_B_26', 'J_N_27', 'J_N_28', 'J_B_29', 'J_A_30', 'J_B_31', 'J_B_32'],
        ['K_A_01', 'K_A_02', 'K_B_03', 'K_A_04', 'K_N_05', 'K_N_06', 'K_B_07', 'K_A_08', 'K_B_09', 'K_A_10', 'K_B_11', 'K_B_12', 'K_A_13', 'K_B_14', 'K_A_15', 'K_N_16', 'K_N_17', 'K_N_18', 'K_B_19', 'K_B_20', 'K_A_21', 'K_B_22', 'K_A_23', 'K_A_24', 'K_B_25', 'K_B_26', 'K_N_27', 'K_N_28', 'K_B_29', 'K_A_30', 'K_B_31', 'K_B_32'],
        ['L_A_01', 'L_A_02', 'L_B_03', 'L_A_04', 'L_N_05', 'L_N_06', 'L_B_07', 'L_A_08', 'L_B_09', 'L_A_10', 'L_B_11', 'L_B_12', 'L_A_13', 'L_B_14', 'L_A_15', 'L_N_16', 'L_N_17', 'L_N_18', 'L_B_19', 'L_B_20', 'L_A_21', 'L_B_22', 'L_A_23', 'L_A_24', 'L_B_25', 'L_B_26', 'L_N_27', 'L_N_28', 'L_B_29', 'L_A_30', 'L_B_31', 'L_B_32'],
        ['M_A_01', 'M_A_02', 'M_B_03', 'M_A_04', 'M_N_05', 'M_N_06', 'M_B_07', 'M_A_08', 'M_B_09', 'M_A_10', 'M_B_11', 'M_B_12', 'M_A_13', 'M_B_14', 'M_A_15', 'M_N_16', 'M_N_17', 'M_N_18', 'M_B_19', 'M_B_20', 'M_A_21', 'M_B_22', 'M_A_23', 'M_A_24', 'M_B_25', 'M_B_26', 'M_N_27', 'M_N_28', 'M_B_29', 'M_A_30', 'M_B_31', 'M_B_32'],
        ['N_A_01', 'N_A_02', 'N_B_03', 'N_A_04', 'N_N_05', 'N_N_06', 'N_B_07', 'N_A_08', 'N_B_09', 'N_A_10', 'N_B_11', 'N_B_12', 'N_A_13', 'N_B_14', 'N_A_15', 'N_N_16', 'N_N_17', 'N_N_18', 'N_B_19', 'N_B_20', 'N_A_21', 'N_B_22', 'N_A_23', 'N_A_24', 'N_B_25', 'N_B_26', 'N_N_27', 'N_N_28', 'N_B_29', 'N_A_30', 'N_B_31', 'N_B_32']
      ]
    },
    {
      id: 3,
      name: 'Cinepolis',
      location: 'Bengaluru',
      capacity: 200,
      ticketPrices:[420, 250],
      seats:[
        ['A_B_01', 'A_B_02', 'A_B_03', 'A_A_04', 'A_A_05', 'A_A_06', 'A_B_07', 'A_A_08', 'A_B_09', 'A_A_10', 'A_A_11', 'A_B_12', 'A_A_13', 'A_B_14', 'A_A_15', 'A_A_16', 'A_A_17', 'A_A_18', 'A_B_19', 'A_B_20', 'A_A_21', 'A_B_22', 'A_A_23', 'A_A_24', 'A_B_25', 'A_B_26', 'A_A_27', 'A_A_28', 'A_B_29', 'A_A_30', 'A_B_31', 'A_B_32'],
        ['B_B_01', 'B_B_02', 'B_B_03', 'B_A_04', 'B_N_05', 'B_N_06', 'B_B_07', 'B_A_08', 'B_B_09', 'B_A_10', 'B_B_11', 'B_B_12', 'B_A_13', 'B_B_14', 'B_A_15', 'B_N_16', 'B_N_17', 'B_N_18', 'B_B_19', 'B_B_20', 'B_A_21', 'B_B_22', 'B_A_23', 'B_A_24', 'B_B_25', 'B_B_26', 'B_N_27', 'B_N_28', 'B_B_29', 'B_A_30', 'B_A_31', 'B_A_32'],
        ['C_A_01', 'C_A_02', 'C_B_03', 'C_A_04', 'C_N_05', 'C_N_06', 'C_B_07', 'C_A_08', 'C_B_09', 'C_A_10', 'C_B_11', 'C_B_12', 'C_A_13', 'C_B_14', 'C_A_15', 'C_N_16', 'C_N_17', 'C_N_18', 'C_B_19', 'C_B_20', 'C_A_21', 'C_B_22', 'C_A_23', 'C_A_24', 'C_B_25', 'C_B_26', 'C_N_27', 'C_N_28', 'C_B_29', 'C_A_30', 'C_B_31', 'C_B_32'],
        ['D_A_01', 'D_A_02', 'D_B_03', 'D_A_04', 'D_N_05', 'D_N_06', 'D_B_07', 'D_A_08', 'D_B_09', 'D_A_10', 'D_B_11', 'D_B_12', 'D_A_13', 'D_B_14', 'D_A_15', 'D_N_16', 'D_N_17', 'D_N_18', 'D_B_19', 'D_B_20', 'D_A_21', 'D_B_22', 'D_A_23', 'D_A_24', 'D_B_25', 'D_B_26', 'D_N_27', 'D_N_28', 'D_B_29', 'D_A_30', 'D_B_31', 'D_B_32'],
        ['E_A_01', 'E_A_02', 'E_B_03', 'E_A_04', 'E_N_05', 'E_N_06', 'E_B_07', 'E_A_08', 'E_B_09', 'E_A_10', 'E_B_11', 'E_B_12', 'E_A_13', 'E_B_14', 'E_A_15', 'E_N_16', 'E_N_17', 'E_N_18', 'E_B_19', 'E_B_20', 'E_A_21', 'E_B_22', 'E_A_23', 'E_A_24', 'E_B_25', 'E_B_26', 'E_N_27', 'E_N_28', 'E_B_29', 'E_A_30', 'E_B_31', 'E_B_32'],
        ['F_A_01', 'F_A_02', 'F_B_03', 'F_A_04', 'F_N_05', 'F_N_06', 'F_B_07', 'F_A_08', 'F_B_09', 'F_A_10', 'F_B_11', 'F_B_12', 'F_A_13', 'F_B_14', 'F_A_15', 'F_N_16', 'F_N_17', 'F_N_18', 'F_B_19', 'F_B_20', 'F_A_21', 'F_B_22', 'F_A_23', 'F_A_24', 'F_B_25', 'F_B_26', 'F_N_27', 'F_N_28', 'F_B_29', 'F_A_30', 'F_B_31', 'F_B_32'],
        ['G_A_01', 'G_A_02', 'G_B_03', 'G_A_04', 'G_N_05', 'G_N_06', 'G_B_07', 'G_A_08', 'G_B_09', 'G_A_10', 'G_B_11', 'G_B_12', 'G_A_13', 'G_B_14', 'G_A_15', 'G_N_16', 'G_N_17', 'G_N_18', 'G_B_19', 'G_B_20', 'G_A_21', 'G_B_22', 'G_A_23', 'G_A_24', 'G_B_25', 'G_B_26', 'G_N_27', 'G_N_28', 'G_B_29', 'G_A_30', 'G_B_31', 'G_B_32'],
        ['H_A_01', 'H_A_02', 'H_B_03', 'H_A_04', 'H_N_05', 'H_N_06', 'H_B_07', 'H_A_08', 'H_B_09', 'H_A_10', 'H_B_11', 'H_B_12', 'H_A_13', 'H_B_14', 'H_A_15', 'H_N_16', 'H_N_17', 'H_N_18', 'H_B_19', 'H_B_20', 'H_A_21', 'H_B_22', 'H_A_23', 'H_A_24', 'H_B_25', 'H_B_26', 'H_N_27', 'H_N_28', 'H_B_29', 'H_A_30', 'H_B_31', 'H_B_32'],
        ['I_A_01', 'I_A_02', 'I_B_03', 'I_A_04', 'I_N_05', 'I_N_06', 'I_B_07', 'I_A_08', 'I_B_09', 'I_A_10', 'I_B_11', 'I_B_12', 'I_A_13', 'I_B_14', 'I_A_15', 'I_N_16', 'I_N_17', 'I_N_18', 'I_B_19', 'I_B_20', 'I_A_21', 'I_B_22', 'I_A_23', 'I_A_24', 'I_B_25', 'I_B_26', 'I_N_27', 'I_N_28', 'I_B_29', 'I_A_30', 'I_B_31', 'I_B_32'],
        ['J_A_01', 'J_A_02', 'J_B_03', 'J_A_04', 'J_N_05', 'J_N_06', 'J_B_07', 'J_A_08', 'J_B_09', 'J_A_10', 'J_B_11', 'J_B_12', 'J_A_13', 'J_B_14', 'J_A_15', 'J_N_16', 'J_N_17', 'J_N_18', 'J_B_19', 'J_B_20', 'J_A_21', 'J_B_22', 'J_A_23', 'J_A_24', 'J_B_25', 'J_B_26', 'J_N_27', 'J_N_28', 'J_B_29', 'J_A_30', 'J_B_31', 'J_B_32'],
        ['K_A_01', 'K_A_02', 'K_B_03', 'K_A_04', 'K_N_05', 'K_N_06', 'K_B_07', 'K_A_08', 'K_B_09', 'K_A_10', 'K_B_11', 'K_B_12', 'K_A_13', 'K_B_14', 'K_A_15', 'K_N_16', 'K_N_17', 'K_N_18', 'K_B_19', 'K_B_20', 'K_A_21', 'K_B_22', 'K_A_23', 'K_A_24', 'K_B_25', 'K_B_26', 'K_N_27', 'K_N_28', 'K_B_29', 'K_A_30', 'K_B_31', 'K_B_32'],
        ['L_A_01', 'L_A_02', 'L_B_03', 'L_A_04', 'L_N_05', 'L_N_06', 'L_B_07', 'L_A_08', 'L_B_09', 'L_A_10', 'L_B_11', 'L_B_12', 'L_A_13', 'L_B_14', 'L_A_15', 'L_N_16', 'L_N_17', 'L_N_18', 'L_B_19', 'L_B_20', 'L_A_21', 'L_B_22', 'L_A_23', 'L_A_24', 'L_B_25', 'L_B_26', 'L_N_27', 'L_N_28', 'L_B_29', 'L_A_30', 'L_B_31', 'L_B_32'],
        ['M_A_01', 'M_A_02', 'M_B_03', 'M_A_04', 'M_N_05', 'M_N_06', 'M_B_07', 'M_A_08', 'M_B_09', 'M_A_10', 'M_B_11', 'M_B_12', 'M_A_13', 'M_B_14', 'M_A_15', 'M_N_16', 'M_N_17', 'M_N_18', 'M_B_19', 'M_B_20', 'M_A_21', 'M_B_22', 'M_A_23', 'M_A_24', 'M_B_25', 'M_B_26', 'M_N_27', 'M_N_28', 'M_B_29', 'M_A_30', 'M_B_31', 'M_B_32'],
        ['N_A_01', 'N_A_02', 'N_B_03', 'N_A_04', 'N_N_05', 'N_N_06', 'N_B_07', 'N_A_08', 'N_B_09', 'N_A_10', 'N_B_11', 'N_B_12', 'N_A_13', 'N_B_14', 'N_A_15', 'N_N_16', 'N_N_17', 'N_N_18', 'N_B_19', 'N_B_20', 'N_A_21', 'N_B_22', 'N_A_23', 'N_A_24', 'N_B_25', 'N_B_26', 'N_N_27', 'N_N_28', 'N_B_29', 'N_A_30', 'N_B_31', 'N_B_32']
      ]
    },
    {
      id: 4,
      name: 'SPI Cinemas',
      location: 'Chennai',
      capacity: 120,
      ticketPrices:[420, 250],
      seats:[
        ['A_B_01', 'A_B_02', 'A_B_03', 'A_A_04', 'A_A_05', 'A_A_06', 'A_B_07', 'A_A_08', 'A_B_09', 'A_A_10', 'A_A_11', 'A_B_12', 'A_A_13', 'A_B_14', 'A_A_15', 'A_A_16', 'A_A_17', 'A_A_18', 'A_B_19', 'A_B_20', 'A_A_21', 'A_B_22', 'A_A_23', 'A_A_24', 'A_B_25', 'A_B_26', 'A_A_27', 'A_A_28', 'A_B_29', 'A_A_30', 'A_B_31', 'A_B_32'],
        ['B_B_01', 'B_B_02', 'B_B_03', 'B_A_04', 'B_N_05', 'B_N_06', 'B_B_07', 'B_A_08', 'B_B_09', 'B_A_10', 'B_B_11', 'B_B_12', 'B_A_13', 'B_B_14', 'B_A_15', 'B_N_16', 'B_N_17', 'B_N_18', 'B_B_19', 'B_B_20', 'B_A_21', 'B_B_22', 'B_A_23', 'B_A_24', 'B_B_25', 'B_B_26', 'B_N_27', 'B_N_28', 'B_B_29', 'B_A_30', 'B_A_31', 'B_A_32'],
        ['C_A_01', 'C_A_02', 'C_B_03', 'C_A_04', 'C_N_05', 'C_N_06', 'C_B_07', 'C_A_08', 'C_B_09', 'C_A_10', 'C_B_11', 'C_B_12', 'C_A_13', 'C_B_14', 'C_A_15', 'C_N_16', 'C_N_17', 'C_N_18', 'C_B_19', 'C_B_20', 'C_A_21', 'C_B_22', 'C_A_23', 'C_A_24', 'C_B_25', 'C_B_26', 'C_N_27', 'C_N_28', 'C_B_29', 'C_A_30', 'C_B_31', 'C_B_32'],
        ['D_A_01', 'D_A_02', 'D_B_03', 'D_A_04', 'D_N_05', 'D_N_06', 'D_B_07', 'D_A_08', 'D_B_09', 'D_A_10', 'D_B_11', 'D_B_12', 'D_A_13', 'D_B_14', 'D_A_15', 'D_N_16', 'D_N_17', 'D_N_18', 'D_B_19', 'D_B_20', 'D_A_21', 'D_B_22', 'D_A_23', 'D_A_24', 'D_B_25', 'D_B_26', 'D_N_27', 'D_N_28', 'D_B_29', 'D_A_30', 'D_B_31', 'D_B_32'],
        ['E_A_01', 'E_A_02', 'E_B_03', 'E_A_04', 'E_N_05', 'E_N_06', 'E_B_07', 'E_A_08', 'E_B_09', 'E_A_10', 'E_B_11', 'E_B_12', 'E_A_13', 'E_B_14', 'E_A_15', 'E_N_16', 'E_N_17', 'E_N_18', 'E_B_19', 'E_B_20', 'E_A_21', 'E_B_22', 'E_A_23', 'E_A_24', 'E_B_25', 'E_B_26', 'E_N_27', 'E_N_28', 'E_B_29', 'E_A_30', 'E_B_31', 'E_B_32'],
        ['F_A_01', 'F_A_02', 'F_B_03', 'F_A_04', 'F_N_05', 'F_N_06', 'F_B_07', 'F_A_08', 'F_B_09', 'F_A_10', 'F_B_11', 'F_B_12', 'F_A_13', 'F_B_14', 'F_A_15', 'F_N_16', 'F_N_17', 'F_N_18', 'F_B_19', 'F_B_20', 'F_A_21', 'F_B_22', 'F_A_23', 'F_A_24', 'F_B_25', 'F_B_26', 'F_N_27', 'F_N_28', 'F_B_29', 'F_A_30', 'F_B_31', 'F_B_32'],
        ['G_A_01', 'G_A_02', 'G_B_03', 'G_A_04', 'G_N_05', 'G_N_06', 'G_B_07', 'G_A_08', 'G_B_09', 'G_A_10', 'G_B_11', 'G_B_12', 'G_A_13', 'G_B_14', 'G_A_15', 'G_N_16', 'G_N_17', 'G_N_18', 'G_B_19', 'G_B_20', 'G_A_21', 'G_B_22', 'G_A_23', 'G_A_24', 'G_B_25', 'G_B_26', 'G_N_27', 'G_N_28', 'G_B_29', 'G_A_30', 'G_B_31', 'G_B_32'],
        ['H_A_01', 'H_A_02', 'H_B_03', 'H_A_04', 'H_N_05', 'H_N_06', 'H_B_07', 'H_A_08', 'H_B_09', 'H_A_10', 'H_B_11', 'H_B_12', 'H_A_13', 'H_B_14', 'H_A_15', 'H_N_16', 'H_N_17', 'H_N_18', 'H_B_19', 'H_B_20', 'H_A_21', 'H_B_22', 'H_A_23', 'H_A_24', 'H_B_25', 'H_B_26', 'H_N_27', 'H_N_28', 'H_B_29', 'H_A_30', 'H_B_31', 'H_B_32'],
        ['I_A_01', 'I_A_02', 'I_B_03', 'I_A_04', 'I_N_05', 'I_N_06', 'I_B_07', 'I_A_08', 'I_B_09', 'I_A_10', 'I_B_11', 'I_B_12', 'I_A_13', 'I_B_14', 'I_A_15', 'I_N_16', 'I_N_17', 'I_N_18', 'I_B_19', 'I_B_20', 'I_A_21', 'I_B_22', 'I_A_23', 'I_A_24', 'I_B_25', 'I_B_26', 'I_N_27', 'I_N_28', 'I_B_29', 'I_A_30', 'I_B_31', 'I_B_32'],
        ['J_A_01', 'J_A_02', 'J_B_03', 'J_A_04', 'J_N_05', 'J_N_06', 'J_B_07', 'J_A_08', 'J_B_09', 'J_A_10', 'J_B_11', 'J_B_12', 'J_A_13', 'J_B_14', 'J_A_15', 'J_N_16', 'J_N_17', 'J_N_18', 'J_B_19', 'J_B_20', 'J_A_21', 'J_B_22', 'J_A_23', 'J_A_24', 'J_B_25', 'J_B_26', 'J_N_27', 'J_N_28', 'J_B_29', 'J_A_30', 'J_B_31', 'J_B_32'],
        ['K_A_01', 'K_A_02', 'K_B_03', 'K_A_04', 'K_N_05', 'K_N_06', 'K_B_07', 'K_A_08', 'K_B_09', 'K_A_10', 'K_B_11', 'K_B_12', 'K_A_13', 'K_B_14', 'K_A_15', 'K_N_16', 'K_N_17', 'K_N_18', 'K_B_19', 'K_B_20', 'K_A_21', 'K_B_22', 'K_A_23', 'K_A_24', 'K_B_25', 'K_B_26', 'K_N_27', 'K_N_28', 'K_B_29', 'K_A_30', 'K_B_31', 'K_B_32'],
        ['L_A_01', 'L_A_02', 'L_B_03', 'L_A_04', 'L_N_05', 'L_N_06', 'L_B_07', 'L_A_08', 'L_B_09', 'L_A_10', 'L_B_11', 'L_B_12', 'L_A_13', 'L_B_14', 'L_A_15', 'L_N_16', 'L_N_17', 'L_N_18', 'L_B_19', 'L_B_20', 'L_A_21', 'L_B_22', 'L_A_23', 'L_A_24', 'L_B_25', 'L_B_26', 'L_N_27', 'L_N_28', 'L_B_29', 'L_A_30', 'L_B_31', 'L_B_32'],
        ['M_A_01', 'M_A_02', 'M_B_03', 'M_A_04', 'M_N_05', 'M_N_06', 'M_B_07', 'M_A_08', 'M_B_09', 'M_A_10', 'M_B_11', 'M_B_12', 'M_A_13', 'M_B_14', 'M_A_15', 'M_N_16', 'M_N_17', 'M_N_18', 'M_B_19', 'M_B_20', 'M_A_21', 'M_B_22', 'M_A_23', 'M_A_24', 'M_B_25', 'M_B_26', 'M_N_27', 'M_N_28', 'M_B_29', 'M_A_30', 'M_B_31', 'M_B_32'],
        ['N_A_01', 'N_A_02', 'N_B_03', 'N_A_04', 'N_N_05', 'N_N_06', 'N_B_07', 'N_A_08', 'N_B_09', 'N_A_10', 'N_B_11', 'N_B_12', 'N_A_13', 'N_B_14', 'N_A_15', 'N_N_16', 'N_N_17', 'N_N_18', 'N_B_19', 'N_B_20', 'N_A_21', 'N_B_22', 'N_A_23', 'N_A_24', 'N_B_25', 'N_B_26', 'N_N_27', 'N_N_28', 'N_B_29', 'N_A_30', 'N_B_31', 'N_B_32']
      ]
    },
    {
      id: 5,
      name: 'Carnival Cinemas',
      location: 'Kolkata',
      capacity: 140,
      ticketPrices:[420, 250],
      seats:[
        ['A_B_01', 'A_B_02', 'A_B_03', 'A_A_04', 'A_A_05', 'A_A_06', 'A_B_07', 'A_A_08', 'A_B_09', 'A_A_10', 'A_A_11', 'A_B_12', 'A_A_13', 'A_B_14', 'A_A_15', 'A_A_16', 'A_A_17', 'A_A_18', 'A_B_19', 'A_B_20', 'A_A_21', 'A_B_22', 'A_A_23', 'A_A_24', 'A_B_25', 'A_B_26', 'A_A_27', 'A_A_28', 'A_B_29', 'A_A_30', 'A_B_31', 'A_B_32'],
        ['B_B_01', 'B_B_02', 'B_B_03', 'B_A_04', 'B_N_05', 'B_N_06', 'B_B_07', 'B_A_08', 'B_B_09', 'B_A_10', 'B_B_11', 'B_B_12', 'B_A_13', 'B_B_14', 'B_A_15', 'B_N_16', 'B_N_17', 'B_N_18', 'B_B_19', 'B_B_20', 'B_A_21', 'B_B_22', 'B_A_23', 'B_A_24', 'B_B_25', 'B_B_26', 'B_N_27', 'B_N_28', 'B_B_29', 'B_A_30', 'B_A_31', 'B_A_32'],
        ['C_A_01', 'C_A_02', 'C_B_03', 'C_A_04', 'C_N_05', 'C_N_06', 'C_B_07', 'C_A_08', 'C_B_09', 'C_A_10', 'C_B_11', 'C_B_12', 'C_A_13', 'C_B_14', 'C_A_15', 'C_N_16', 'C_N_17', 'C_N_18', 'C_B_19', 'C_B_20', 'C_A_21', 'C_B_22', 'C_A_23', 'C_A_24', 'C_B_25', 'C_B_26', 'C_N_27', 'C_N_28', 'C_B_29', 'C_A_30', 'C_B_31', 'C_B_32'],
        ['D_A_01', 'D_A_02', 'D_B_03', 'D_A_04', 'D_N_05', 'D_N_06', 'D_B_07', 'D_A_08', 'D_B_09', 'D_A_10', 'D_B_11', 'D_B_12', 'D_A_13', 'D_B_14', 'D_A_15', 'D_N_16', 'D_N_17', 'D_N_18', 'D_B_19', 'D_B_20', 'D_A_21', 'D_B_22', 'D_A_23', 'D_A_24', 'D_B_25', 'D_B_26', 'D_N_27', 'D_N_28', 'D_B_29', 'D_A_30', 'D_B_31', 'D_B_32'],
        ['E_A_01', 'E_A_02', 'E_B_03', 'E_A_04', 'E_N_05', 'E_N_06', 'E_B_07', 'E_A_08', 'E_B_09', 'E_A_10', 'E_B_11', 'E_B_12', 'E_A_13', 'E_B_14', 'E_A_15', 'E_N_16', 'E_N_17', 'E_N_18', 'E_B_19', 'E_B_20', 'E_A_21', 'E_B_22', 'E_A_23', 'E_A_24', 'E_B_25', 'E_B_26', 'E_N_27', 'E_N_28', 'E_B_29', 'E_A_30', 'E_B_31', 'E_B_32'],
        ['F_A_01', 'F_A_02', 'F_B_03', 'F_A_04', 'F_N_05', 'F_N_06', 'F_B_07', 'F_A_08', 'F_B_09', 'F_A_10', 'F_B_11', 'F_B_12', 'F_A_13', 'F_B_14', 'F_A_15', 'F_N_16', 'F_N_17', 'F_N_18', 'F_B_19', 'F_B_20', 'F_A_21', 'F_B_22', 'F_A_23', 'F_A_24', 'F_B_25', 'F_B_26', 'F_N_27', 'F_N_28', 'F_B_29', 'F_A_30', 'F_B_31', 'F_B_32'],
        ['G_A_01', 'G_A_02', 'G_B_03', 'G_A_04', 'G_N_05', 'G_N_06', 'G_B_07', 'G_A_08', 'G_B_09', 'G_A_10', 'G_B_11', 'G_B_12', 'G_A_13', 'G_B_14', 'G_A_15', 'G_N_16', 'G_N_17', 'G_N_18', 'G_B_19', 'G_B_20', 'G_A_21', 'G_B_22', 'G_A_23', 'G_A_24', 'G_B_25', 'G_B_26', 'G_N_27', 'G_N_28', 'G_B_29', 'G_A_30', 'G_B_31', 'G_B_32'],
        ['H_A_01', 'H_A_02', 'H_B_03', 'H_A_04', 'H_N_05', 'H_N_06', 'H_B_07', 'H_A_08', 'H_B_09', 'H_A_10', 'H_B_11', 'H_B_12', 'H_A_13', 'H_B_14', 'H_A_15', 'H_N_16', 'H_N_17', 'H_N_18', 'H_B_19', 'H_B_20', 'H_A_21', 'H_B_22', 'H_A_23', 'H_A_24', 'H_B_25', 'H_B_26', 'H_N_27', 'H_N_28', 'H_B_29', 'H_A_30', 'H_B_31', 'H_B_32'],
        ['I_A_01', 'I_A_02', 'I_B_03', 'I_A_04', 'I_N_05', 'I_N_06', 'I_B_07', 'I_A_08', 'I_B_09', 'I_A_10', 'I_B_11', 'I_B_12', 'I_A_13', 'I_B_14', 'I_A_15', 'I_N_16', 'I_N_17', 'I_N_18', 'I_B_19', 'I_B_20', 'I_A_21', 'I_B_22', 'I_A_23', 'I_A_24', 'I_B_25', 'I_B_26', 'I_N_27', 'I_N_28', 'I_B_29', 'I_A_30', 'I_B_31', 'I_B_32'],
        ['J_A_01', 'J_A_02', 'J_B_03', 'J_A_04', 'J_N_05', 'J_N_06', 'J_B_07', 'J_A_08', 'J_B_09', 'J_A_10', 'J_B_11', 'J_B_12', 'J_A_13', 'J_B_14', 'J_A_15', 'J_N_16', 'J_N_17', 'J_N_18', 'J_B_19', 'J_B_20', 'J_A_21', 'J_B_22', 'J_A_23', 'J_A_24', 'J_B_25', 'J_B_26', 'J_N_27', 'J_N_28', 'J_B_29', 'J_A_30', 'J_B_31', 'J_B_32'],
        ['K_A_01', 'K_A_02', 'K_B_03', 'K_A_04', 'K_N_05', 'K_N_06', 'K_B_07', 'K_A_08', 'K_B_09', 'K_A_10', 'K_B_11', 'K_B_12', 'K_A_13', 'K_B_14', 'K_A_15', 'K_N_16', 'K_N_17', 'K_N_18', 'K_B_19', 'K_B_20', 'K_A_21', 'K_B_22', 'K_A_23', 'K_A_24', 'K_B_25', 'K_B_26', 'K_N_27', 'K_N_28', 'K_B_29', 'K_A_30', 'K_B_31', 'K_B_32'],
        ['L_A_01', 'L_A_02', 'L_B_03', 'L_A_04', 'L_N_05', 'L_N_06', 'L_B_07', 'L_A_08', 'L_B_09', 'L_A_10', 'L_B_11', 'L_B_12', 'L_A_13', 'L_B_14', 'L_A_15', 'L_N_16', 'L_N_17', 'L_N_18', 'L_B_19', 'L_B_20', 'L_A_21', 'L_B_22', 'L_A_23', 'L_A_24', 'L_B_25', 'L_B_26', 'L_N_27', 'L_N_28', 'L_B_29', 'L_A_30', 'L_B_31', 'L_B_32'],
        ['M_A_01', 'M_A_02', 'M_B_03', 'M_A_04', 'M_N_05', 'M_N_06', 'M_B_07', 'M_A_08', 'M_B_09', 'M_A_10', 'M_B_11', 'M_B_12', 'M_A_13', 'M_B_14', 'M_A_15', 'M_N_16', 'M_N_17', 'M_N_18', 'M_B_19', 'M_B_20', 'M_A_21', 'M_B_22', 'M_A_23', 'M_A_24', 'M_B_25', 'M_B_26', 'M_N_27', 'M_N_28', 'M_B_29', 'M_A_30', 'M_B_31', 'M_B_32'],
        ['N_A_01', 'N_A_02', 'N_B_03', 'N_A_04', 'N_N_05', 'N_N_06', 'N_B_07', 'N_A_08', 'N_B_09', 'N_A_10', 'N_B_11', 'N_B_12', 'N_A_13', 'N_B_14', 'N_A_15', 'N_N_16', 'N_N_17', 'N_N_18', 'N_B_19', 'N_B_20', 'N_A_21', 'N_B_22', 'N_A_23', 'N_A_24', 'N_B_25', 'N_B_26', 'N_N_27', 'N_N_28', 'N_B_29', 'N_A_30', 'N_B_31', 'N_B_32']
      ]
    },
    {
      id: 6,
      name: 'Prasad\'s IMAX',
      location: 'Hyderabad',
      capacity: 160,
      ticketPrices:[420, 250],
      seats:[
        ['A_B_01', 'A_B_02', 'A_B_03', 'A_A_04', 'A_A_05', 'A_A_06', 'A_B_07', 'A_A_08', 'A_B_09', 'A_A_10', 'A_A_11', 'A_B_12', 'A_A_13', 'A_B_14', 'A_A_15', 'A_A_16', 'A_A_17', 'A_A_18', 'A_B_19', 'A_B_20', 'A_A_21', 'A_B_22', 'A_A_23', 'A_A_24', 'A_B_25', 'A_B_26', 'A_A_27', 'A_A_28', 'A_B_29', 'A_A_30', 'A_B_31', 'A_B_32'],
        ['B_B_01', 'B_B_02', 'B_B_03', 'B_A_04', 'B_N_05', 'B_N_06', 'B_B_07', 'B_A_08', 'B_B_09', 'B_A_10', 'B_B_11', 'B_B_12', 'B_A_13', 'B_B_14', 'B_A_15', 'B_N_16', 'B_N_17', 'B_N_18', 'B_B_19', 'B_B_20', 'B_A_21', 'B_B_22', 'B_A_23', 'B_A_24', 'B_B_25', 'B_B_26', 'B_N_27', 'B_N_28', 'B_B_29', 'B_A_30', 'B_A_31', 'B_A_32'],
        ['C_A_01', 'C_A_02', 'C_B_03', 'C_A_04', 'C_N_05', 'C_N_06', 'C_B_07', 'C_A_08', 'C_B_09', 'C_A_10', 'C_B_11', 'C_B_12', 'C_A_13', 'C_B_14', 'C_A_15', 'C_N_16', 'C_N_17', 'C_N_18', 'C_B_19', 'C_B_20', 'C_A_21', 'C_B_22', 'C_A_23', 'C_A_24', 'C_B_25', 'C_B_26', 'C_N_27', 'C_N_28', 'C_B_29', 'C_A_30', 'C_B_31', 'C_B_32'],
        ['D_A_01', 'D_A_02', 'D_B_03', 'D_A_04', 'D_N_05', 'D_N_06', 'D_B_07', 'D_A_08', 'D_B_09', 'D_A_10', 'D_B_11', 'D_B_12', 'D_A_13', 'D_B_14', 'D_A_15', 'D_N_16', 'D_N_17', 'D_N_18', 'D_B_19', 'D_B_20', 'D_A_21', 'D_B_22', 'D_A_23', 'D_A_24', 'D_B_25', 'D_B_26', 'D_N_27', 'D_N_28', 'D_B_29', 'D_A_30', 'D_B_31', 'D_B_32'],
        ['E_A_01', 'E_A_02', 'E_B_03', 'E_A_04', 'E_N_05', 'E_N_06', 'E_B_07', 'E_A_08', 'E_B_09', 'E_A_10', 'E_B_11', 'E_B_12', 'E_A_13', 'E_B_14', 'E_A_15', 'E_N_16', 'E_N_17', 'E_N_18', 'E_B_19', 'E_B_20', 'E_A_21', 'E_B_22', 'E_A_23', 'E_A_24', 'E_B_25', 'E_B_26', 'E_N_27', 'E_N_28', 'E_B_29', 'E_A_30', 'E_B_31', 'E_B_32'],
        ['F_A_01', 'F_A_02', 'F_B_03', 'F_A_04', 'F_N_05', 'F_N_06', 'F_B_07', 'F_A_08', 'F_B_09', 'F_A_10', 'F_B_11', 'F_B_12', 'F_A_13', 'F_B_14', 'F_A_15', 'F_N_16', 'F_N_17', 'F_N_18', 'F_B_19', 'F_B_20', 'F_A_21', 'F_B_22', 'F_A_23', 'F_A_24', 'F_B_25', 'F_B_26', 'F_N_27', 'F_N_28', 'F_B_29', 'F_A_30', 'F_B_31', 'F_B_32'],
        ['G_A_01', 'G_A_02', 'G_B_03', 'G_A_04', 'G_N_05', 'G_N_06', 'G_B_07', 'G_A_08', 'G_B_09', 'G_A_10', 'G_B_11', 'G_B_12', 'G_A_13', 'G_B_14', 'G_A_15', 'G_N_16', 'G_N_17', 'G_N_18', 'G_B_19', 'G_B_20', 'G_A_21', 'G_B_22', 'G_A_23', 'G_A_24', 'G_B_25', 'G_B_26', 'G_N_27', 'G_N_28', 'G_B_29', 'G_A_30', 'G_B_31', 'G_B_32'],
        ['H_A_01', 'H_A_02', 'H_B_03', 'H_A_04', 'H_N_05', 'H_N_06', 'H_B_07', 'H_A_08', 'H_B_09', 'H_A_10', 'H_B_11', 'H_B_12', 'H_A_13', 'H_B_14', 'H_A_15', 'H_N_16', 'H_N_17', 'H_N_18', 'H_B_19', 'H_B_20', 'H_A_21', 'H_B_22', 'H_A_23', 'H_A_24', 'H_B_25', 'H_B_26', 'H_N_27', 'H_N_28', 'H_B_29', 'H_A_30', 'H_B_31', 'H_B_32'],
        ['I_A_01', 'I_A_02', 'I_B_03', 'I_A_04', 'I_N_05', 'I_N_06', 'I_B_07', 'I_A_08', 'I_B_09', 'I_A_10', 'I_B_11', 'I_B_12', 'I_A_13', 'I_B_14', 'I_A_15', 'I_N_16', 'I_N_17', 'I_N_18', 'I_B_19', 'I_B_20', 'I_A_21', 'I_B_22', 'I_A_23', 'I_A_24', 'I_B_25', 'I_B_26', 'I_N_27', 'I_N_28', 'I_B_29', 'I_A_30', 'I_B_31', 'I_B_32'],
        ['J_A_01', 'J_A_02', 'J_B_03', 'J_A_04', 'J_N_05', 'J_N_06', 'J_B_07', 'J_A_08', 'J_B_09', 'J_A_10', 'J_B_11', 'J_B_12', 'J_A_13', 'J_B_14', 'J_A_15', 'J_N_16', 'J_N_17', 'J_N_18', 'J_B_19', 'J_B_20', 'J_A_21', 'J_B_22', 'J_A_23', 'J_A_24', 'J_B_25', 'J_B_26', 'J_N_27', 'J_N_28', 'J_B_29', 'J_A_30', 'J_B_31', 'J_B_32'],
        ['K_A_01', 'K_A_02', 'K_B_03', 'K_A_04', 'K_N_05', 'K_N_06', 'K_B_07', 'K_A_08', 'K_B_09', 'K_A_10', 'K_B_11', 'K_B_12', 'K_A_13', 'K_B_14', 'K_A_15', 'K_N_16', 'K_N_17', 'K_N_18', 'K_B_19', 'K_B_20', 'K_A_21', 'K_B_22', 'K_A_23', 'K_A_24', 'K_B_25', 'K_B_26', 'K_N_27', 'K_N_28', 'K_B_29', 'K_A_30', 'K_B_31', 'K_B_32'],
        ['L_A_01', 'L_A_02', 'L_B_03', 'L_A_04', 'L_N_05', 'L_N_06', 'L_B_07', 'L_A_08', 'L_B_09', 'L_A_10', 'L_B_11', 'L_B_12', 'L_A_13', 'L_B_14', 'L_A_15', 'L_N_16', 'L_N_17', 'L_N_18', 'L_B_19', 'L_B_20', 'L_A_21', 'L_B_22', 'L_A_23', 'L_A_24', 'L_B_25', 'L_B_26', 'L_N_27', 'L_N_28', 'L_B_29', 'L_A_30', 'L_B_31', 'L_B_32'],
        ['M_A_01', 'M_A_02', 'M_B_03', 'M_A_04', 'M_N_05', 'M_N_06', 'M_B_07', 'M_A_08', 'M_B_09', 'M_A_10', 'M_B_11', 'M_B_12', 'M_A_13', 'M_B_14', 'M_A_15', 'M_N_16', 'M_N_17', 'M_N_18', 'M_B_19', 'M_B_20', 'M_A_21', 'M_B_22', 'M_A_23', 'M_A_24', 'M_B_25', 'M_B_26', 'M_N_27', 'M_N_28', 'M_B_29', 'M_A_30', 'M_B_31', 'M_B_32'],
        ['N_A_01', 'N_A_02', 'N_B_03', 'N_A_04', 'N_N_05', 'N_N_06', 'N_B_07', 'N_A_08', 'N_B_09', 'N_A_10', 'N_B_11', 'N_B_12', 'N_A_13', 'N_B_14', 'N_A_15', 'N_N_16', 'N_N_17', 'N_N_18', 'N_B_19', 'N_B_20', 'N_A_21', 'N_B_22', 'N_A_23', 'N_A_24', 'N_B_25', 'N_B_26', 'N_N_27', 'N_N_28', 'N_B_29', 'N_A_30', 'N_B_31', 'N_B_32']
      ]
    },
    {
      id: 7,
      name: 'IMAX Wadala',
      location: 'Mumbai',
      capacity: 170,
      ticketPrices:[420, 250],
      seats:[
        ['A_B_01', 'A_B_02', 'A_B_03', 'A_A_04', 'A_A_05', 'A_A_06', 'A_B_07', 'A_A_08', 'A_B_09', 'A_A_10', 'A_A_11', 'A_B_12', 'A_A_13', 'A_B_14', 'A_A_15', 'A_A_16', 'A_A_17', 'A_A_18', 'A_B_19', 'A_B_20', 'A_A_21', 'A_B_22', 'A_A_23', 'A_A_24', 'A_B_25', 'A_B_26', 'A_A_27', 'A_A_28', 'A_B_29', 'A_A_30', 'A_B_31', 'A_B_32'],
        ['B_B_01', 'B_B_02', 'B_B_03', 'B_A_04', 'B_N_05', 'B_N_06', 'B_B_07', 'B_A_08', 'B_B_09', 'B_A_10', 'B_B_11', 'B_B_12', 'B_A_13', 'B_B_14', 'B_A_15', 'B_N_16', 'B_N_17', 'B_N_18', 'B_B_19', 'B_B_20', 'B_A_21', 'B_B_22', 'B_A_23', 'B_A_24', 'B_B_25', 'B_B_26', 'B_N_27', 'B_N_28', 'B_B_29', 'B_A_30', 'B_A_31', 'B_A_32'],
        ['C_A_01', 'C_A_02', 'C_B_03', 'C_A_04', 'C_N_05', 'C_N_06', 'C_B_07', 'C_A_08', 'C_B_09', 'C_A_10', 'C_B_11', 'C_B_12', 'C_A_13', 'C_B_14', 'C_A_15', 'C_N_16', 'C_N_17', 'C_N_18', 'C_B_19', 'C_B_20', 'C_A_21', 'C_B_22', 'C_A_23', 'C_A_24', 'C_B_25', 'C_B_26', 'C_N_27', 'C_N_28', 'C_B_29', 'C_A_30', 'C_B_31', 'C_B_32'],
        ['D_A_01', 'D_A_02', 'D_B_03', 'D_A_04', 'D_N_05', 'D_N_06', 'D_B_07', 'D_A_08', 'D_B_09', 'D_A_10', 'D_B_11', 'D_B_12', 'D_A_13', 'D_B_14', 'D_A_15', 'D_N_16', 'D_N_17', 'D_N_18', 'D_B_19', 'D_B_20', 'D_A_21', 'D_B_22', 'D_A_23', 'D_A_24', 'D_B_25', 'D_B_26', 'D_N_27', 'D_N_28', 'D_B_29', 'D_A_30', 'D_B_31', 'D_B_32'],
        ['E_A_01', 'E_A_02', 'E_B_03', 'E_A_04', 'E_N_05', 'E_N_06', 'E_B_07', 'E_A_08', 'E_B_09', 'E_A_10', 'E_B_11', 'E_B_12', 'E_A_13', 'E_B_14', 'E_A_15', 'E_N_16', 'E_N_17', 'E_N_18', 'E_B_19', 'E_B_20', 'E_A_21', 'E_B_22', 'E_A_23', 'E_A_24', 'E_B_25', 'E_B_26', 'E_N_27', 'E_N_28', 'E_B_29', 'E_A_30', 'E_B_31', 'E_B_32'],
        ['F_A_01', 'F_A_02', 'F_B_03', 'F_A_04', 'F_N_05', 'F_N_06', 'F_B_07', 'F_A_08', 'F_B_09', 'F_A_10', 'F_B_11', 'F_B_12', 'F_A_13', 'F_B_14', 'F_A_15', 'F_N_16', 'F_N_17', 'F_N_18', 'F_B_19', 'F_B_20', 'F_A_21', 'F_B_22', 'F_A_23', 'F_A_24', 'F_B_25', 'F_B_26', 'F_N_27', 'F_N_28', 'F_B_29', 'F_A_30', 'F_B_31', 'F_B_32'],
        ['G_A_01', 'G_A_02', 'G_B_03', 'G_A_04', 'G_N_05', 'G_N_06', 'G_B_07', 'G_A_08', 'G_B_09', 'G_A_10', 'G_B_11', 'G_B_12', 'G_A_13', 'G_B_14', 'G_A_15', 'G_N_16', 'G_N_17', 'G_N_18', 'G_B_19', 'G_B_20', 'G_A_21', 'G_B_22', 'G_A_23', 'G_A_24', 'G_B_25', 'G_B_26', 'G_N_27', 'G_N_28', 'G_B_29', 'G_A_30', 'G_B_31', 'G_B_32'],
        ['H_A_01', 'H_A_02', 'H_B_03', 'H_A_04', 'H_N_05', 'H_N_06', 'H_B_07', 'H_A_08', 'H_B_09', 'H_A_10', 'H_B_11', 'H_B_12', 'H_A_13', 'H_B_14', 'H_A_15', 'H_N_16', 'H_N_17', 'H_N_18', 'H_B_19', 'H_B_20', 'H_A_21', 'H_B_22', 'H_A_23', 'H_A_24', 'H_B_25', 'H_B_26', 'H_N_27', 'H_N_28', 'H_B_29', 'H_A_30', 'H_B_31', 'H_B_32'],
        ['I_A_01', 'I_A_02', 'I_B_03', 'I_A_04', 'I_N_05', 'I_N_06', 'I_B_07', 'I_A_08', 'I_B_09', 'I_A_10', 'I_B_11', 'I_B_12', 'I_A_13', 'I_B_14', 'I_A_15', 'I_N_16', 'I_N_17', 'I_N_18', 'I_B_19', 'I_B_20', 'I_A_21', 'I_B_22', 'I_A_23', 'I_A_24', 'I_B_25', 'I_B_26', 'I_N_27', 'I_N_28', 'I_B_29', 'I_A_30', 'I_B_31', 'I_B_32'],
        ['J_A_01', 'J_A_02', 'J_B_03', 'J_A_04', 'J_N_05', 'J_N_06', 'J_B_07', 'J_A_08', 'J_B_09', 'J_A_10', 'J_B_11', 'J_B_12', 'J_A_13', 'J_B_14', 'J_A_15', 'J_N_16', 'J_N_17', 'J_N_18', 'J_B_19', 'J_B_20', 'J_A_21', 'J_B_22', 'J_A_23', 'J_A_24', 'J_B_25', 'J_B_26', 'J_N_27', 'J_N_28', 'J_B_29', 'J_A_30', 'J_B_31', 'J_B_32'],
        ['K_A_01', 'K_A_02', 'K_B_03', 'K_A_04', 'K_N_05', 'K_N_06', 'K_B_07', 'K_A_08', 'K_B_09', 'K_A_10', 'K_B_11', 'K_B_12', 'K_A_13', 'K_B_14', 'K_A_15', 'K_N_16', 'K_N_17', 'K_N_18', 'K_B_19', 'K_B_20', 'K_A_21', 'K_B_22', 'K_A_23', 'K_A_24', 'K_B_25', 'K_B_26', 'K_N_27', 'K_N_28', 'K_B_29', 'K_A_30', 'K_B_31', 'K_B_32'],
        ['L_A_01', 'L_A_02', 'L_B_03', 'L_A_04', 'L_N_05', 'L_N_06', 'L_B_07', 'L_A_08', 'L_B_09', 'L_A_10', 'L_B_11', 'L_B_12', 'L_A_13', 'L_B_14', 'L_A_15', 'L_N_16', 'L_N_17', 'L_N_18', 'L_B_19', 'L_B_20', 'L_A_21', 'L_B_22', 'L_A_23', 'L_A_24', 'L_B_25', 'L_B_26', 'L_N_27', 'L_N_28', 'L_B_29', 'L_A_30', 'L_B_31', 'L_B_32'],
        ['M_A_01', 'M_A_02', 'M_B_03', 'M_A_04', 'M_N_05', 'M_N_06', 'M_B_07', 'M_A_08', 'M_B_09', 'M_A_10', 'M_B_11', 'M_B_12', 'M_A_13', 'M_B_14', 'M_A_15', 'M_N_16', 'M_N_17', 'M_N_18', 'M_B_19', 'M_B_20', 'M_A_21', 'M_B_22', 'M_A_23', 'M_A_24', 'M_B_25', 'M_B_26', 'M_N_27', 'M_N_28', 'M_B_29', 'M_A_30', 'M_B_31', 'M_B_32'],
        ['N_A_01', 'N_A_02', 'N_B_03', 'N_A_04', 'N_N_05', 'N_N_06', 'N_B_07', 'N_A_08', 'N_B_09', 'N_A_10', 'N_B_11', 'N_B_12', 'N_A_13', 'N_B_14', 'N_A_15', 'N_N_16', 'N_N_17', 'N_N_18', 'N_B_19', 'N_B_20', 'N_A_21', 'N_B_22', 'N_A_23', 'N_A_24', 'N_B_25', 'N_B_26', 'N_N_27', 'N_N_28', 'N_B_29', 'N_A_30', 'N_B_31', 'N_B_32']
      ]
    },
    {
      id: 8,
      name: 'Wave Cinemas',
      location: 'Noida',
      capacity: 130,
      ticketPrices:[420, 250],
      seats:[
        ['A_B_01', 'A_B_02', 'A_B_03', 'A_A_04', 'A_A_05', 'A_A_06', 'A_B_07', 'A_A_08', 'A_B_09', 'A_A_10', 'A_A_11', 'A_B_12', 'A_A_13', 'A_B_14', 'A_A_15', 'A_A_16', 'A_A_17', 'A_A_18', 'A_B_19', 'A_B_20', 'A_A_21', 'A_B_22', 'A_A_23', 'A_A_24', 'A_B_25', 'A_B_26', 'A_A_27', 'A_A_28', 'A_B_29', 'A_A_30', 'A_B_31', 'A_B_32'],
        ['B_B_01', 'B_B_02', 'B_B_03', 'B_A_04', 'B_N_05', 'B_N_06', 'B_B_07', 'B_A_08', 'B_B_09', 'B_A_10', 'B_B_11', 'B_B_12', 'B_A_13', 'B_B_14', 'B_A_15', 'B_N_16', 'B_N_17', 'B_N_18', 'B_B_19', 'B_B_20', 'B_A_21', 'B_B_22', 'B_A_23', 'B_A_24', 'B_B_25', 'B_B_26', 'B_N_27', 'B_N_28', 'B_B_29', 'B_A_30', 'B_A_31', 'B_A_32'],
        ['C_A_01', 'C_A_02', 'C_B_03', 'C_A_04', 'C_N_05', 'C_N_06', 'C_B_07', 'C_A_08', 'C_B_09', 'C_A_10', 'C_B_11', 'C_B_12', 'C_A_13', 'C_B_14', 'C_A_15', 'C_N_16', 'C_N_17', 'C_N_18', 'C_B_19', 'C_B_20', 'C_A_21', 'C_B_22', 'C_A_23', 'C_A_24', 'C_B_25', 'C_B_26', 'C_N_27', 'C_N_28', 'C_B_29', 'C_A_30', 'C_B_31', 'C_B_32'],
        ['D_A_01', 'D_A_02', 'D_B_03', 'D_A_04', 'D_N_05', 'D_N_06', 'D_B_07', 'D_A_08', 'D_B_09', 'D_A_10', 'D_B_11', 'D_B_12', 'D_A_13', 'D_B_14', 'D_A_15', 'D_N_16', 'D_N_17', 'D_N_18', 'D_B_19', 'D_B_20', 'D_A_21', 'D_B_22', 'D_A_23', 'D_A_24', 'D_B_25', 'D_B_26', 'D_N_27', 'D_N_28', 'D_B_29', 'D_A_30', 'D_B_31', 'D_B_32'],
        ['E_A_01', 'E_A_02', 'E_B_03', 'E_A_04', 'E_N_05', 'E_N_06', 'E_B_07', 'E_A_08', 'E_B_09', 'E_A_10', 'E_B_11', 'E_B_12', 'E_A_13', 'E_B_14', 'E_A_15', 'E_N_16', 'E_N_17', 'E_N_18', 'E_B_19', 'E_B_20', 'E_A_21', 'E_B_22', 'E_A_23', 'E_A_24', 'E_B_25', 'E_B_26', 'E_N_27', 'E_N_28', 'E_B_29', 'E_A_30', 'E_B_31', 'E_B_32'],
        ['F_A_01', 'F_A_02', 'F_B_03', 'F_A_04', 'F_N_05', 'F_N_06', 'F_B_07', 'F_A_08', 'F_B_09', 'F_A_10', 'F_B_11', 'F_B_12', 'F_A_13', 'F_B_14', 'F_A_15', 'F_N_16', 'F_N_17', 'F_N_18', 'F_B_19', 'F_B_20', 'F_A_21', 'F_B_22', 'F_A_23', 'F_A_24', 'F_B_25', 'F_B_26', 'F_N_27', 'F_N_28', 'F_B_29', 'F_A_30', 'F_B_31', 'F_B_32'],
        ['G_A_01', 'G_A_02', 'G_B_03', 'G_A_04', 'G_N_05', 'G_N_06', 'G_B_07', 'G_A_08', 'G_B_09', 'G_A_10', 'G_B_11', 'G_B_12', 'G_A_13', 'G_B_14', 'G_A_15', 'G_N_16', 'G_N_17', 'G_N_18', 'G_B_19', 'G_B_20', 'G_A_21', 'G_B_22', 'G_A_23', 'G_A_24', 'G_B_25', 'G_B_26', 'G_N_27', 'G_N_28', 'G_B_29', 'G_A_30', 'G_B_31', 'G_B_32'],
        ['H_A_01', 'H_A_02', 'H_B_03', 'H_A_04', 'H_N_05', 'H_N_06', 'H_B_07', 'H_A_08', 'H_B_09', 'H_A_10', 'H_B_11', 'H_B_12', 'H_A_13', 'H_B_14', 'H_A_15', 'H_N_16', 'H_N_17', 'H_N_18', 'H_B_19', 'H_B_20', 'H_A_21', 'H_B_22', 'H_A_23', 'H_A_24', 'H_B_25', 'H_B_26', 'H_N_27', 'H_N_28', 'H_B_29', 'H_A_30', 'H_B_31', 'H_B_32'],
        ['I_A_01', 'I_A_02', 'I_B_03', 'I_A_04', 'I_N_05', 'I_N_06', 'I_B_07', 'I_A_08', 'I_B_09', 'I_A_10', 'I_B_11', 'I_B_12', 'I_A_13', 'I_B_14', 'I_A_15', 'I_N_16', 'I_N_17', 'I_N_18', 'I_B_19', 'I_B_20', 'I_A_21', 'I_B_22', 'I_A_23', 'I_A_24', 'I_B_25', 'I_B_26', 'I_N_27', 'I_N_28', 'I_B_29', 'I_A_30', 'I_B_31', 'I_B_32'],
        ['J_A_01', 'J_A_02', 'J_B_03', 'J_A_04', 'J_N_05', 'J_N_06', 'J_B_07', 'J_A_08', 'J_B_09', 'J_A_10', 'J_B_11', 'J_B_12', 'J_A_13', 'J_B_14', 'J_A_15', 'J_N_16', 'J_N_17', 'J_N_18', 'J_B_19', 'J_B_20', 'J_A_21', 'J_B_22', 'J_A_23', 'J_A_24', 'J_B_25', 'J_B_26', 'J_N_27', 'J_N_28', 'J_B_29', 'J_A_30', 'J_B_31', 'J_B_32'],
        ['K_A_01', 'K_A_02', 'K_B_03', 'K_A_04', 'K_N_05', 'K_N_06', 'K_B_07', 'K_A_08', 'K_B_09', 'K_A_10', 'K_B_11', 'K_B_12', 'K_A_13', 'K_B_14', 'K_A_15', 'K_N_16', 'K_N_17', 'K_N_18', 'K_B_19', 'K_B_20', 'K_A_21', 'K_B_22', 'K_A_23', 'K_A_24', 'K_B_25', 'K_B_26', 'K_N_27', 'K_N_28', 'K_B_29', 'K_A_30', 'K_B_31', 'K_B_32'],
        ['L_A_01', 'L_A_02', 'L_B_03', 'L_A_04', 'L_N_05', 'L_N_06', 'L_B_07', 'L_A_08', 'L_B_09', 'L_A_10', 'L_B_11', 'L_B_12', 'L_A_13', 'L_B_14', 'L_A_15', 'L_N_16', 'L_N_17', 'L_N_18', 'L_B_19', 'L_B_20', 'L_A_21', 'L_B_22', 'L_A_23', 'L_A_24', 'L_B_25', 'L_B_26', 'L_N_27', 'L_N_28', 'L_B_29', 'L_A_30', 'L_B_31', 'L_B_32'],
        ['M_A_01', 'M_A_02', 'M_B_03', 'M_A_04', 'M_N_05', 'M_N_06', 'M_B_07', 'M_A_08', 'M_B_09', 'M_A_10', 'M_B_11', 'M_B_12', 'M_A_13', 'M_B_14', 'M_A_15', 'M_N_16', 'M_N_17', 'M_N_18', 'M_B_19', 'M_B_20', 'M_A_21', 'M_B_22', 'M_A_23', 'M_A_24', 'M_B_25', 'M_B_26', 'M_N_27', 'M_N_28', 'M_B_29', 'M_A_30', 'M_B_31', 'M_B_32'],
        ['N_A_01', 'N_A_02', 'N_B_03', 'N_A_04', 'N_N_05', 'N_N_06', 'N_B_07', 'N_A_08', 'N_B_09', 'N_A_10', 'N_B_11', 'N_B_12', 'N_A_13', 'N_B_14', 'N_A_15', 'N_N_16', 'N_N_17', 'N_N_18', 'N_B_19', 'N_B_20', 'N_A_21', 'N_B_22', 'N_A_23', 'N_A_24', 'N_B_25', 'N_B_26', 'N_N_27', 'N_N_28', 'N_B_29', 'N_A_30', 'N_B_31', 'N_B_32']
      ]
    },
    {
      id: 9,
      name: 'CineMAX Cinemas',
      location: 'Ahmedabad',
      capacity: 150,
      ticketPrices:[420, 250],
      seats:[
        ['A_B_01', 'A_B_02', 'A_B_03', 'A_A_04', 'A_A_05', 'A_A_06', 'A_B_07', 'A_A_08', 'A_B_09', 'A_A_10', 'A_A_11', 'A_B_12', 'A_A_13', 'A_B_14', 'A_A_15', 'A_A_16', 'A_A_17', 'A_A_18', 'A_B_19', 'A_B_20', 'A_A_21', 'A_B_22', 'A_A_23', 'A_A_24', 'A_B_25', 'A_B_26', 'A_A_27', 'A_A_28', 'A_B_29', 'A_A_30', 'A_B_31', 'A_B_32'],
        ['B_B_01', 'B_B_02', 'B_B_03', 'B_A_04', 'B_N_05', 'B_N_06', 'B_B_07', 'B_A_08', 'B_B_09', 'B_A_10', 'B_B_11', 'B_B_12', 'B_A_13', 'B_B_14', 'B_A_15', 'B_N_16', 'B_N_17', 'B_N_18', 'B_B_19', 'B_B_20', 'B_A_21', 'B_B_22', 'B_A_23', 'B_A_24', 'B_B_25', 'B_B_26', 'B_N_27', 'B_N_28', 'B_B_29', 'B_A_30', 'B_A_31', 'B_A_32'],
        ['C_A_01', 'C_A_02', 'C_B_03', 'C_A_04', 'C_N_05', 'C_N_06', 'C_B_07', 'C_A_08', 'C_B_09', 'C_A_10', 'C_B_11', 'C_B_12', 'C_A_13', 'C_B_14', 'C_A_15', 'C_N_16', 'C_N_17', 'C_N_18', 'C_B_19', 'C_B_20', 'C_A_21', 'C_B_22', 'C_A_23', 'C_A_24', 'C_B_25', 'C_B_26', 'C_N_27', 'C_N_28', 'C_B_29', 'C_A_30', 'C_B_31', 'C_B_32'],
        ['D_A_01', 'D_A_02', 'D_B_03', 'D_A_04', 'D_N_05', 'D_N_06', 'D_B_07', 'D_A_08', 'D_B_09', 'D_A_10', 'D_B_11', 'D_B_12', 'D_A_13', 'D_B_14', 'D_A_15', 'D_N_16', 'D_N_17', 'D_N_18', 'D_B_19', 'D_B_20', 'D_A_21', 'D_B_22', 'D_A_23', 'D_A_24', 'D_B_25', 'D_B_26', 'D_N_27', 'D_N_28', 'D_B_29', 'D_A_30', 'D_B_31', 'D_B_32'],
        ['E_A_01', 'E_A_02', 'E_B_03', 'E_A_04', 'E_N_05', 'E_N_06', 'E_B_07', 'E_A_08', 'E_B_09', 'E_A_10', 'E_B_11', 'E_B_12', 'E_A_13', 'E_B_14', 'E_A_15', 'E_N_16', 'E_N_17', 'E_N_18', 'E_B_19', 'E_B_20', 'E_A_21', 'E_B_22', 'E_A_23', 'E_A_24', 'E_B_25', 'E_B_26', 'E_N_27', 'E_N_28', 'E_B_29', 'E_A_30', 'E_B_31', 'E_B_32'],
        ['F_A_01', 'F_A_02', 'F_B_03', 'F_A_04', 'F_N_05', 'F_N_06', 'F_B_07', 'F_A_08', 'F_B_09', 'F_A_10', 'F_B_11', 'F_B_12', 'F_A_13', 'F_B_14', 'F_A_15', 'F_N_16', 'F_N_17', 'F_N_18', 'F_B_19', 'F_B_20', 'F_A_21', 'F_B_22', 'F_A_23', 'F_A_24', 'F_B_25', 'F_B_26', 'F_N_27', 'F_N_28', 'F_B_29', 'F_A_30', 'F_B_31', 'F_B_32'],
        ['G_A_01', 'G_A_02', 'G_B_03', 'G_A_04', 'G_N_05', 'G_N_06', 'G_B_07', 'G_A_08', 'G_B_09', 'G_A_10', 'G_B_11', 'G_B_12', 'G_A_13', 'G_B_14', 'G_A_15', 'G_N_16', 'G_N_17', 'G_N_18', 'G_B_19', 'G_B_20', 'G_A_21', 'G_B_22', 'G_A_23', 'G_A_24', 'G_B_25', 'G_B_26', 'G_N_27', 'G_N_28', 'G_B_29', 'G_A_30', 'G_B_31', 'G_B_32'],
        ['H_A_01', 'H_A_02', 'H_B_03', 'H_A_04', 'H_N_05', 'H_N_06', 'H_B_07', 'H_A_08', 'H_B_09', 'H_A_10', 'H_B_11', 'H_B_12', 'H_A_13', 'H_B_14', 'H_A_15', 'H_N_16', 'H_N_17', 'H_N_18', 'H_B_19', 'H_B_20', 'H_A_21', 'H_B_22', 'H_A_23', 'H_A_24', 'H_B_25', 'H_B_26', 'H_N_27', 'H_N_28', 'H_B_29', 'H_A_30', 'H_B_31', 'H_B_32'],
        ['I_A_01', 'I_A_02', 'I_B_03', 'I_A_04', 'I_N_05', 'I_N_06', 'I_B_07', 'I_A_08', 'I_B_09', 'I_A_10', 'I_B_11', 'I_B_12', 'I_A_13', 'I_B_14', 'I_A_15', 'I_N_16', 'I_N_17', 'I_N_18', 'I_B_19', 'I_B_20', 'I_A_21', 'I_B_22', 'I_A_23', 'I_A_24', 'I_B_25', 'I_B_26', 'I_N_27', 'I_N_28', 'I_B_29', 'I_A_30', 'I_B_31', 'I_B_32'],
        ['J_A_01', 'J_A_02', 'J_B_03', 'J_A_04', 'J_N_05', 'J_N_06', 'J_B_07', 'J_A_08', 'J_B_09', 'J_A_10', 'J_B_11', 'J_B_12', 'J_A_13', 'J_B_14', 'J_A_15', 'J_N_16', 'J_N_17', 'J_N_18', 'J_B_19', 'J_B_20', 'J_A_21', 'J_B_22', 'J_A_23', 'J_A_24', 'J_B_25', 'J_B_26', 'J_N_27', 'J_N_28', 'J_B_29', 'J_A_30', 'J_B_31', 'J_B_32'],
        ['K_A_01', 'K_A_02', 'K_B_03', 'K_A_04', 'K_N_05', 'K_N_06', 'K_B_07', 'K_A_08', 'K_B_09', 'K_A_10', 'K_B_11', 'K_B_12', 'K_A_13', 'K_B_14', 'K_A_15', 'K_N_16', 'K_N_17', 'K_N_18', 'K_B_19', 'K_B_20', 'K_A_21', 'K_B_22', 'K_A_23', 'K_A_24', 'K_B_25', 'K_B_26', 'K_N_27', 'K_N_28', 'K_B_29', 'K_A_30', 'K_B_31', 'K_B_32'],
        ['L_A_01', 'L_A_02', 'L_B_03', 'L_A_04', 'L_N_05', 'L_N_06', 'L_B_07', 'L_A_08', 'L_B_09', 'L_A_10', 'L_B_11', 'L_B_12', 'L_A_13', 'L_B_14', 'L_A_15', 'L_N_16', 'L_N_17', 'L_N_18', 'L_B_19', 'L_B_20', 'L_A_21', 'L_B_22', 'L_A_23', 'L_A_24', 'L_B_25', 'L_B_26', 'L_N_27', 'L_N_28', 'L_B_29', 'L_A_30', 'L_B_31', 'L_B_32'],
        ['M_A_01', 'M_A_02', 'M_B_03', 'M_A_04', 'M_N_05', 'M_N_06', 'M_B_07', 'M_A_08', 'M_B_09', 'M_A_10', 'M_B_11', 'M_B_12', 'M_A_13', 'M_B_14', 'M_A_15', 'M_N_16', 'M_N_17', 'M_N_18', 'M_B_19', 'M_B_20', 'M_A_21', 'M_B_22', 'M_A_23', 'M_A_24', 'M_B_25', 'M_B_26', 'M_N_27', 'M_N_28', 'M_B_29', 'M_A_30', 'M_B_31', 'M_B_32'],
        ['N_A_01', 'N_A_02', 'N_B_03', 'N_A_04', 'N_N_05', 'N_N_06', 'N_B_07', 'N_A_08', 'N_B_09', 'N_A_10', 'N_B_11', 'N_B_12', 'N_A_13', 'N_B_14', 'N_A_15', 'N_N_16', 'N_N_17', 'N_N_18', 'N_B_19', 'N_B_20', 'N_A_21', 'N_B_22', 'N_A_23', 'N_A_24', 'N_B_25', 'N_B_26', 'N_N_27', 'N_N_28', 'N_B_29', 'N_A_30', 'N_B_31', 'N_B_32']
      ]
    },
    {
      id: 10,
      name: 'Carnival Cinemas',
      location: 'Jaipur',
      capacity: 100,
      ticketPrices:[420, 250],
      seats:[
        ['A_B_01', 'A_B_02', 'A_B_03', 'A_A_04', 'A_A_05', 'A_A_06', 'A_B_07', 'A_A_08', 'A_B_09', 'A_A_10', 'A_A_11', 'A_B_12', 'A_A_13', 'A_B_14', 'A_A_15', 'A_A_16', 'A_A_17', 'A_A_18', 'A_B_19', 'A_B_20', 'A_A_21', 'A_B_22', 'A_A_23', 'A_A_24', 'A_B_25', 'A_B_26', 'A_A_27', 'A_A_28', 'A_B_29', 'A_A_30', 'A_B_31', 'A_B_32'],
        ['B_B_01', 'B_B_02', 'B_B_03', 'B_A_04', 'B_N_05', 'B_N_06', 'B_B_07', 'B_A_08', 'B_B_09', 'B_A_10', 'B_B_11', 'B_B_12', 'B_A_13', 'B_B_14', 'B_A_15', 'B_N_16', 'B_N_17', 'B_N_18', 'B_B_19', 'B_B_20', 'B_A_21', 'B_B_22', 'B_A_23', 'B_A_24', 'B_B_25', 'B_B_26', 'B_N_27', 'B_N_28', 'B_B_29', 'B_A_30', 'B_A_31', 'B_A_32'],
        ['C_A_01', 'C_A_02', 'C_B_03', 'C_A_04', 'C_N_05', 'C_N_06', 'C_B_07', 'C_A_08', 'C_B_09', 'C_A_10', 'C_B_11', 'C_B_12', 'C_A_13', 'C_B_14', 'C_A_15', 'C_N_16', 'C_N_17', 'C_N_18', 'C_B_19', 'C_B_20', 'C_A_21', 'C_B_22', 'C_A_23', 'C_A_24', 'C_B_25', 'C_B_26', 'C_N_27', 'C_N_28', 'C_B_29', 'C_A_30', 'C_B_31', 'C_B_32'],
        ['D_A_01', 'D_A_02', 'D_B_03', 'D_A_04', 'D_N_05', 'D_N_06', 'D_B_07', 'D_A_08', 'D_B_09', 'D_A_10', 'D_B_11', 'D_B_12', 'D_A_13', 'D_B_14', 'D_A_15', 'D_N_16', 'D_N_17', 'D_N_18', 'D_B_19', 'D_B_20', 'D_A_21', 'D_B_22', 'D_A_23', 'D_A_24', 'D_B_25', 'D_B_26', 'D_N_27', 'D_N_28', 'D_B_29', 'D_A_30', 'D_B_31', 'D_B_32'],
        ['E_A_01', 'E_A_02', 'E_B_03', 'E_A_04', 'E_N_05', 'E_N_06', 'E_B_07', 'E_A_08', 'E_B_09', 'E_A_10', 'E_B_11', 'E_B_12', 'E_A_13', 'E_B_14', 'E_A_15', 'E_N_16', 'E_N_17', 'E_N_18', 'E_B_19', 'E_B_20', 'E_A_21', 'E_B_22', 'E_A_23', 'E_A_24', 'E_B_25', 'E_B_26', 'E_N_27', 'E_N_28', 'E_B_29', 'E_A_30', 'E_B_31', 'E_B_32'],
        ['F_A_01', 'F_A_02', 'F_B_03', 'F_A_04', 'F_N_05', 'F_N_06', 'F_B_07', 'F_A_08', 'F_B_09', 'F_A_10', 'F_B_11', 'F_B_12', 'F_A_13', 'F_B_14', 'F_A_15', 'F_N_16', 'F_N_17', 'F_N_18', 'F_B_19', 'F_B_20', 'F_A_21', 'F_B_22', 'F_A_23', 'F_A_24', 'F_B_25', 'F_B_26', 'F_N_27', 'F_N_28', 'F_B_29', 'F_A_30', 'F_B_31', 'F_B_32'],
        ['G_A_01', 'G_A_02', 'G_B_03', 'G_A_04', 'G_N_05', 'G_N_06', 'G_B_07', 'G_A_08', 'G_B_09', 'G_A_10', 'G_B_11', 'G_B_12', 'G_A_13', 'G_B_14', 'G_A_15', 'G_N_16', 'G_N_17', 'G_N_18', 'G_B_19', 'G_B_20', 'G_A_21', 'G_B_22', 'G_A_23', 'G_A_24', 'G_B_25', 'G_B_26', 'G_N_27', 'G_N_28', 'G_B_29', 'G_A_30', 'G_B_31', 'G_B_32'],
        ['H_A_01', 'H_A_02', 'H_B_03', 'H_A_04', 'H_N_05', 'H_N_06', 'H_B_07', 'H_A_08', 'H_B_09', 'H_A_10', 'H_B_11', 'H_B_12', 'H_A_13', 'H_B_14', 'H_A_15', 'H_N_16', 'H_N_17', 'H_N_18', 'H_B_19', 'H_B_20', 'H_A_21', 'H_B_22', 'H_A_23', 'H_A_24', 'H_B_25', 'H_B_26', 'H_N_27', 'H_N_28', 'H_B_29', 'H_A_30', 'H_B_31', 'H_B_32'],
        ['I_A_01', 'I_A_02', 'I_B_03', 'I_A_04', 'I_N_05', 'I_N_06', 'I_B_07', 'I_A_08', 'I_B_09', 'I_A_10', 'I_B_11', 'I_B_12', 'I_A_13', 'I_B_14', 'I_A_15', 'I_N_16', 'I_N_17', 'I_N_18', 'I_B_19', 'I_B_20', 'I_A_21', 'I_B_22', 'I_A_23', 'I_A_24', 'I_B_25', 'I_B_26', 'I_N_27', 'I_N_28', 'I_B_29', 'I_A_30', 'I_B_31', 'I_B_32'],
        ['J_A_01', 'J_A_02', 'J_B_03', 'J_A_04', 'J_N_05', 'J_N_06', 'J_B_07', 'J_A_08', 'J_B_09', 'J_A_10', 'J_B_11', 'J_B_12', 'J_A_13', 'J_B_14', 'J_A_15', 'J_N_16', 'J_N_17', 'J_N_18', 'J_B_19', 'J_B_20', 'J_A_21', 'J_B_22', 'J_A_23', 'J_A_24', 'J_B_25', 'J_B_26', 'J_N_27', 'J_N_28', 'J_B_29', 'J_A_30', 'J_B_31', 'J_B_32'],
        ['K_A_01', 'K_A_02', 'K_B_03', 'K_A_04', 'K_N_05', 'K_N_06', 'K_B_07', 'K_A_08', 'K_B_09', 'K_A_10', 'K_B_11', 'K_B_12', 'K_A_13', 'K_B_14', 'K_A_15', 'K_N_16', 'K_N_17', 'K_N_18', 'K_B_19', 'K_B_20', 'K_A_21', 'K_B_22', 'K_A_23', 'K_A_24', 'K_B_25', 'K_B_26', 'K_N_27', 'K_N_28', 'K_B_29', 'K_A_30', 'K_B_31', 'K_B_32'],
        ['L_A_01', 'L_A_02', 'L_B_03', 'L_A_04', 'L_N_05', 'L_N_06', 'L_B_07', 'L_A_08', 'L_B_09', 'L_A_10', 'L_B_11', 'L_B_12', 'L_A_13', 'L_B_14', 'L_A_15', 'L_N_16', 'L_N_17', 'L_N_18', 'L_B_19', 'L_B_20', 'L_A_21', 'L_B_22', 'L_A_23', 'L_A_24', 'L_B_25', 'L_B_26', 'L_N_27', 'L_N_28', 'L_B_29', 'L_A_30', 'L_B_31', 'L_B_32'],
        ['M_A_01', 'M_A_02', 'M_B_03', 'M_A_04', 'M_N_05', 'M_N_06', 'M_B_07', 'M_A_08', 'M_B_09', 'M_A_10', 'M_B_11', 'M_B_12', 'M_A_13', 'M_B_14', 'M_A_15', 'M_N_16', 'M_N_17', 'M_N_18', 'M_B_19', 'M_B_20', 'M_A_21', 'M_B_22', 'M_A_23', 'M_A_24', 'M_B_25', 'M_B_26', 'M_N_27', 'M_N_28', 'M_B_29', 'M_A_30', 'M_B_31', 'M_B_32'],
        ['N_A_01', 'N_A_02', 'N_B_03', 'N_A_04', 'N_N_05', 'N_N_06', 'N_B_07', 'N_A_08', 'N_B_09', 'N_A_10', 'N_B_11', 'N_B_12', 'N_A_13', 'N_B_14', 'N_A_15', 'N_N_16', 'N_N_17', 'N_N_18', 'N_B_19', 'N_B_20', 'N_A_21', 'N_B_22', 'N_A_23', 'N_A_24', 'N_B_25', 'N_B_26', 'N_N_27', 'N_N_28', 'N_B_29', 'N_A_30', 'N_B_31', 'N_B_32']
      ]
    }
  ];

  const showTimes = [
    {
      id: 1,
      movieTitle: 'Zara Hatke Zara Bachke',
      popularity: 9.7,
      votes: 1500,
      timings: ["10:45 AM", "01:45 PM", "04:45 PM", "07:45 PM", "10:45 PM"],
      dates: dates,
      theatreId: [1, 2, 3],
    },
    {
      id: 2,
      movieTitle: 'Spider-Man: Across the Spider-Verse',
      popularity: 8.5,
      votes: 1200,
      timings: ["10:45 AM", "01:45 PM", "04:45 PM", "07:45 PM", "10:45 PM"],
      dates: dates,
      theatreId: [3, 4, 5],
    },
    {
      id: 3,
      movieTitle: 'The Kerala Story',
      popularity: 8.9,
      votes: 1350,
      timings: ["10:45 AM", "01:45 PM", "04:45 PM", "07:45 PM", "10:45 PM"],
      dates: dates,
      theatreId: [5, 6, 7],
    },
    {
      id: 4,
      movieTitle: 'Fast X',
      popularity: 8.4,
      votes: 1100,
      timings: ["10:45 AM", "01:45 PM", "04:45 PM", "07:45 PM", "10:45 PM"],
      dates: dates,
      theatreId: [7, 8, 9]
    },
    {
      id: 5,
      movieTitle: 'Transformers: Rise of the Beasts' ,
      popularity: 8.1,
      votes: 950,
      timings: ["10:45 AM", "01:45 PM", "04:45 PM", "07:45 PM", "10:45 PM"],
      dates: dates,
      theatreId: [9, 10, 1]
    },
    {
      id: 6,
      movieTitle: 'IB71',
      popularity: 9.2,
      votes: 1420,
      timings: ["10:45 AM", "01:45 PM", "04:45 PM", "07:45 PM", "10:45 PM"],
      dates: dates,
      theatreId: [1, 2, 3]
    },
    {
      id: 7,
      movieTitle: 'Guardian of the Galaxy Vol. 3',
      popularity: 8.3,
      votes: 980,
      timings: ["10:45 AM", "01:45 PM", "04:45 PM", "07:45 PM", "10:45 PM"],
      dates: dates,
      theatreId: [3, 4, 5]
    },
    {
      id: 8,
      movieTitle: 'Pareshan',
      popularity: 7.7,
      votes: 800,
      timings: ["10:45 AM", "01:45 PM", "04:45 PM", "07:45 PM", "10:45 PM"],
      dates: dates,
      theatreId: [4, 9, 10]
    },
    {
      id: 9,
      movieTitle: '2018',
      popularity: 9.5,
      votes: 1280,
      timings: ["10:45 AM", "01:45 PM", "04:45 PM", "07:45 PM", "10:45 PM"],
      dates: dates,
      theatreId: [1]
    },
    {
      id: 10,
      movieTitle: 'Veeran',
      popularity: 7.9,
      votes: 890,
      timings: ["10:45 AM", "01:45 PM", "04:45 PM", "07:45 PM", "10:45 PM"],
      dates: dates,
      theatreId: [1, 4],
    }
  ];

  module.exports={moviesData, theatersData, showTimes}