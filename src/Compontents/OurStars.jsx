import OurStarsCard from "./OurStarsCard";
import SectionHeading from "./SectionHeading";


const OurStars = () => {
    return (
        <div>
            <SectionHeading heading={'Meet Our Stars'}></SectionHeading>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 place-items-center">
            <OurStarsCard image={'https://t4.ftcdn.net/jpg/04/68/56/21/240_F_468562120_X0N1PGvZ7DF7D2fJt30JnWaodzLzynKH.jpg'} quote={'Summer School is fun I learned discipline here. Thanks to coach.'} name={'Mat Demon'} team={'Under 19 National Rugby Team'}></OurStarsCard>
            <OurStarsCard image={'https://t4.ftcdn.net/jpg/01/78/60/65/240_F_178606560_fjC6oKtbbxeBR9qyaaeeqe7LflI46b6c.jpg'} quote={'Coach Rozario is awesome. Sporting star will always be in my heart'} name={'Din Jones'} team={'State Basket Ball Team'}></OurStarsCard>
            <OurStarsCard image={'https://img.freepik.com/free-photo/front-view-serious-woman_23-2148369453.jpg?size=626&ext=jpg&ga=GA1.1.373721687.1666840502&semt=ais'} quote={'Great experience. Went there 3 times. Learned a lot'} name={'Sarah Paul'} team={'State Swimming Champion'}></OurStarsCard>
            <OurStarsCard image={'https://t4.ftcdn.net/jpg/00/53/24/51/240_F_53245149_H2x6guV7iZNdqlSbG2GrLepvtjtrms5t.jpg'} quote={'Met my best friend here. Amazing environment'} name={'Dean MAthews'} team={'State Hokey Team'}></OurStarsCard>
            <OurStarsCard image={'https://img.freepik.com/free-photo/cute-excited-girl-student-sitting-floor-with-crossed-feet_176420-20217.jpg?size=626&ext=jpg&ga=GA1.1.373721687.1666840502&semt=ais'} quote={'Enjoyed a lot. The spirit is great. Valuable memory.'} name={'Lara kate'} team={'National Volley Ball team'}></OurStarsCard>
            <OurStarsCard image={'https://img.freepik.com/free-photo/young-woman-isolated-white-wall_231208-11508.jpg?size=626&ext=jpg&ga=GA1.2.373721687.1666840502&semt=ais'} quote={' The spirit is great.Enjoyed a lot. Valuable memory.Thanks to coach.'} name={'Emma Glen'} team={'National Soccer team'}></OurStarsCard>
            </div>
            
        </div>
    );
};

export default OurStars;