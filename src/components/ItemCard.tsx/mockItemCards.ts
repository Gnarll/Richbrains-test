import mockLogo1 from '../../assets/logo1.png'
import mockLogo2 from '../../assets/logo2.png'
import mockLogo3 from '../../assets/logo3.png'


export interface IItemCard {
    title: string;
    startDates: string;
    minMonthsDuration: number;
    maxMonthsDuration: number;
    price: string;
    logo: string;
}

export const mockItemCards: IItemCard[] =  [{
    title: 'MSc Data Analytics and Information Systems Management',
    startDates: 'Every 12 weeks',
    minMonthsDuration: 12,
    maxMonthsDuration: 24,
    price: '£7,500',
    logo: mockLogo1
},
{
    title: 'MSc Data Analytics and Information Systems Management',
    startDates: 'Every 12 weeks',
    minMonthsDuration: 18,
    maxMonthsDuration: 36,
    price: '£6,000',
    logo: mockLogo2
},
{
    title: 'MSc Data Analytics and Information Systems Management',
    startDates: 'Every 12 weeks',
    minMonthsDuration: 10,
    maxMonthsDuration: 20,
    price: '£10,500',
    logo: mockLogo3
},
{
    title: 'MSc Data Analytics and Information Systems Management',
    startDates: 'Every 12 weeks',
    minMonthsDuration: 18,
    maxMonthsDuration: 36,
    price: '£9,500',
    logo: mockLogo1
},{
    title: 'MSc Data Analytics and Information Systems Management',
    startDates: 'Every 12 weeks',
    minMonthsDuration: 18,
    maxMonthsDuration: 36,
    price: '£8,500',
    logo: mockLogo2
},
{
    title: 'MSc Data Analytics and Information Systems Management',
    startDates: 'Every 12 weeks',
    minMonthsDuration: 18,
    maxMonthsDuration: 36,
    price: '£4,900',
    logo: mockLogo3
}]