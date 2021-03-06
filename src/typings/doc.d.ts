declare interface ApiDocOption {
    name: string;
    type: string;
    required: boolean;
    description: string;
    twoWay: boolean;
    'default': boolean;
}

declare interface ApiDoc {
    name: string;
    title: string;
    description: string;
    browserSupport: {
        browsers: string[]
    },
    options: ApiDocOption[];
}