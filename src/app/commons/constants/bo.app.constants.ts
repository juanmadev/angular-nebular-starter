import { NbMenuItem } from '@nebular/theme';

export class BOAppConstants {

    public static SESSION_USER = 'currentUser';
    public static AUTH_BASIC_KEY = '';
    public static DEFAULT_APP_LANG = 'es';
    public static MOMENT_FORMATS = {
        parse: {
            dateInput: 'DD-MM-YYYY',
        },
        display: {
            dateInput: 'DD/MM/YYYY',
            monthYearLabel: 'MMM YYYY',
            dateA11yLabel: 'LL',
            monthYearA11yLabel: 'MMMM YYYY',
        },
    };

    public static TABLE_ACTIONS_PROP: string = 'acciones';
    public static MENU_ITEMS: NbMenuItem[] = [
        {
            title: 'Home',
            icon: 'home-outline',
            link: '/main/dashboard',
            home: true,
        },
    ];

    /**
     * EJEMPLO para usar la funcion nameoff para usarlas en las tablas
     */
    //   public static CAMPAINGS_COLS: Array<any> = [
    //     // {
    //     //   header: 'Id',
    //     //   field: BOGeaAppConstants.nameof(() => BOGeaAppConstants.campaignModel.id),
    //     //   sortable: true,
    //     // },
    //     {
    //       header: 'Nombre',
    //       field: BOGeaAppConstants.nameof(() => BOGeaAppConstants.campaignModel.name),
    //       sortable: true,
    //     },
    //     {
    //       header: 'Sponsor',
    //       field: BOGeaAppConstants.nameof(() => BOGeaAppConstants.campaignModel.sponsor.name, true),
    //       sortable: false,
    //       nested: true,
    //     },
    //     {
    //       header: 'Mínimo',
    //       field: BOGeaAppConstants.nameof(() => BOGeaAppConstants.campaignModel.softCap),
    //       sortable: false,
    //     },
    //     {
    //       header: 'Máximo',
    //       field: BOGeaAppConstants.nameof(() => BOGeaAppConstants.campaignModel.hardCap),
    //       sortable: false,
    //     },
    //     {
    //       header: 'Fecha de inicio',
    //       field: BOGeaAppConstants.nameof(() => BOGeaAppConstants.campaignModel.formatedInitDate),
    //       sortable: false,
    //     },
    //     {
    //       header: 'Fecha final',
    //       field: BOGeaAppConstants.nameof(() => BOGeaAppConstants.campaignModel.formatedEndDate),
    //       sortable: false,
    //     },
    //     {
    //       header: 'Activo',
    //       field: BOGeaAppConstants.nameof(() => BOGeaAppConstants.campaignModel.enabled),
    //       sortable: false,
    //     },
    //     {
    //       header: 'Borrador',
    //       field: BOGeaAppConstants.nameof(() => BOGeaAppConstants.campaignModel.draftMode),
    //       sortable: false,
    //     },
    //     {
    //       header: 'Coste por acción',
    //       field: BOGeaAppConstants.nameof(() => BOGeaAppConstants.campaignModel.costPerAction),
    //       sortable: false,
    //     },
    //     {
    //       header: 'Tipo',
    //       field: BOGeaAppConstants.nameof(() => BOGeaAppConstants.campaignModel.type.name, true),
    //       sortable: false,
    //       nested: true,
    //     },
    //     {
    //       header: 'Modalidad',
    //       field: BOGeaAppConstants.nameof(() => BOGeaAppConstants.campaignModel.modality.name, true),
    //       sortable: false,
    //       nested: true,
    //     },
    //     {
    //       header: 'Acciones',
    //       field: BOGeaAppConstants.TABLE_ACTIONS_PROP,
    //       sortable: false,
    //     },
    //   ];

    /** Returns the name of a namespace or variable reference at runtime. */
    /** Retorna el literal con el atributo del objeto que se le pasa */

    /** Modificado para que si se indica el fullpath no retorne el primer elemento para evitar usar el nombre de la clase que se invoca */
    /** Ejemplo: { name: 'Total', prop: CDAppConstants.nameof(() => CDAppConstants.moviMod.total), sortable: true } */
    public static nameof(selector: () => any, fullname = false) {
        const s = '' + selector;
        const m = s.match(/return\s+([A-Z$_.]+)/i)
            || s.match(/.*?(?:=>|function.*?{(?!\s*return))\s*([A-Z$_.]+)/i);
        const name = m && m[1] || '';
        return fullname ? name.split('.').slice(2).join('.') : name.split('.').reverse()[0];
    }

}
