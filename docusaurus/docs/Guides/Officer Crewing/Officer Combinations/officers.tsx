  const ships = [
    'Interceptor',
    'Explorer',
    'Surveyor',
    'Battleship'
  ] as const
  
  const hostileType = [
    'General',
    'Eclipse',
    'Armada',
    'Cardassian Armada',
    'Heavy Trader',
    'Surveyor',
    'Explorer',
    'Battleship',
    'Interceptor'
  ] as const

export interface officerCombo {
    comboName: string; // Quick name of the combination
    captain: { 
      officerName: string; // Captain name
      officerRank: Number; // ideal rank
    },
    firstOfficer: {
      officerName: string; // first officer name
      officerRank: Number; // ideal rank
    },
    secondOfficer: {
      officerName: string; //second officer name
      officerRank: Number; // ideal rank
    },
    purpose: string;
    hostileType: typeof hostileType; // General, Eclipse, Armada, Cardassian Armada, etc
    ship: typeof ships; // Interceptor, Explorer, Battleship
    tags: Array; // any tags that might help this be more searchable
    credit: string; // who should get credit for this? 
  }
  
  export const data: officerCombo = [
    {
      comboName: 'Hostile Meta (PMC)',
      captain: {
        officerName: 'Pike',
        officerRank: 1,
      },
      firstOfficer: {
        officerName: 'Moreau',
        officerRank: 1,
      },
      secondOfficer: {
        officerName: 'Chen',
        officerRank: 1
      },
      purpose: 'Standard hostile grinding, specifically against hostiles with Energy Weapons.',
      hostileType: [
        'Surveyor', 
        'Explorer', 
        'Battleship',
      ],
      ship: [
        'Interceptor',
        'POOP',
        'Battleship',
        'Surveyor'
      ],
      tags: [
        'Meta',
        'PMC',
        'Hostiles'
      ],
      credit: 'N/A'
    }
  ]