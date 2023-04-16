export type Launch = {
  id: string;
  name: string;
  slug: string;
  status: {
    id: number;
    name: string;
    abbrev: string;
    description: string;
  };
  net: string;
  window_end: string;
  window_start: string;
  probability: number;
  holdreason: string;
  failreason: string;
  hashtag: string | null;
  launch_service_provider: {
    id: number;
    url: string;
    name: string;
    type: string;
  };
  rocket: {
    id: number;
    configuration: {
      id: number;
      url: string;
      name: string;
      family: string;
      full_name: string;
      variant: string;
    };
    mission: {
      id: number;
      name: string;
      desription: string;
      launch_designator: string | null;
      type: string;
      orbit: {
        id: number;
        name: string;
        abbrev: string;
      };
    };
    pad: {
      id: number;
      url: string;
      agency_id: number;
      name: string;
      info_url: string | null;
      wiki_url: string | null;
      map_url: string | null;
      latitude: string;
      longitude: string;
      location: {
        id: number;
        url: string;
        name: string;
        country_code: string;
        map_image: string;
        total_launch_count: number;
        total_landing_count: number;
      };
      map_image: string;
      total_launch_count: number;
      orbital_launch_attempt_count: number;
    };
  };
  webcast_live: boolean;
  image: string;
  infographic: string | null;
  program: [];
  orbital_launch_attempt_count: number;
  location_launch_attempt_count: number;
  pad_launch_attempt_count: number;
  agency_launch_attempt_count: number;
  orbital_launch_attempt_count_year: number;
  location_launch_attempt_count_year: number;
  pad_launch_attempt_count_year: number;
  agency_launch_attempt_count_year: number;
};

export type LaunchResults = {
  count: number;
  next: string;
  previous: string;
  results: Launch[];
};
