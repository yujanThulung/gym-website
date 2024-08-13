import React from "react";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SonsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

function Home({ setSelectedPage }: Props) {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* IMAGE AND MAIN HEADER */}
      <motion.div className="md:flex  mx-auto w-5/6 items-center md:5/6"
      onViewportEnter={()=>setSelectedPage(SelectedPage.Home)}>
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="relative ">
              <motion.div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext "
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.8, ease: "easeIn" }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0},
              }}
              >
                <img src={HomePageText} alt="home-page-text" />
              </motion.div>
            </div>

            <p className="mt-8 text-sm ">
              Unleash Your Potential: Achieve your fitness goals with expert
              guidance and top-notch equipment in a supportive environment.
            </p>
          </motion.div>

          {/*   ACTIONS */}
          <motion.div
            className="flex mt-8 items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#$SelectedPage.ContactUs`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>

        {/* IMAGES */}
        <motion.div
          className="flex basis-3/5 justify-center md:z-10
          md:ml-40 md:mt-16 md:justify-items-end"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <img src={HomePageGraphic} alt="home-pageGraphic" />
        </motion.div>
      </motion.div>

      {/* SPONSORS */}
      {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-primary-100 py-10">
          <div className="mx-auto w-5/6">
            <motion.div 
            className="flex w-3/5 items-center justify-between gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, ease:"easeIn"}}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
            >
              <img src={SponsorRedBull} alt="redbull-sponsor" />
              <img src={SponsorForbes} alt="forbes-sponsor" />
              <img src={SonsorFortune} alt="fortune-sponsor" />
              <img src={SponsorRedBull} alt="redbull-sponsor" />
            </motion.div>
          </div>
        </div>
      )}
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum velit eos aliquid dolorem totam, nulla iure impedit dolores dicta doloribus ad molestiae! Dolore impedit, obcaecati nemo blanditiis asperiores optio dicta voluptatum exercitationem, quos eius, porro natus sunt modi iste adipisci veniam. Eos labore voluptatum veniam accusamus consequatur. Error eius dignissimos voluptates numquam nisi veritatis accusamus alias inventore, tenetur facilis praesentium corrupti quo quis? Libero similique cupiditate, dolores dolorem, itaque natus odit consequatur, expedita veritatis est aspernatur maiores nemo? Magni odit, eos, sint est, tenetur vero cumque doloremque placeat praesentium nostrum hic sit facilis? Sed veniam perferendis, pariatur eaque voluptate architecto id, ipsa amet ducimus harum inventore alias iusto autem dignissimos adipisci molestiae. Ratione quod accusamus, velit quos ut laborum provident! Sed vero velit consequatur cum exercitationem, repellat culpa veniam quasi commodi esse accusamus, amet quidem voluptates ratione omnis, odio tenetur corporis unde praesentium voluptatem?</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias veritatis dolore sunt quos quae voluptatibus eius blanditiis eum sapiente esse, temporibus cupiditate debitis voluptate distinctio quidem quasi incidunt aperiam voluptatum voluptatem mollitia aspernatur sit quia! Quis voluptate ratione sequi itaque voluptatibus aperiam sint rerum laudantium at? Commodi praesentium similique aliquid, fuga voluptates ipsam ullam ad officiis delectus quam doloremque possimus vel excepturi sequi ut nemo non id voluptatem expedita. Soluta recusandae vero sint dolores animi perspiciatis, ea dolorum blanditiis sapiente nobis voluptate, totam voluptas ab quaerat, quis quo! Eligendi assumenda totam eveniet hic aliquam repudiandae a quisquam animi ipsam nihil, voluptatum consectetur cupiditate quia harum sit pariatur! Tempora sed pariatur ipsam, debitis, mollitia ipsum molestiae ratione eum odit tenetur velit veritatis nesciunt et vel corrupti illum doloribus neque deserunt suscipit dicta alias animi voluptates! Quia numquam dolor natus eaque repellendus illum iure voluptas ipsum mollitia, optio doloribus tempora, accusamus voluptate ullam obcaecati provident totam laborum vel quam ratione dignissimos rem modi? Vero, obcaecati. Quisquam, officiis. Consequatur quia dignissimos vero consectetur repudiandae necessitatibus. Ipsa explicabo similique nobis nisi perferendis distinctio est enim, architecto modi dolor nam. Ea omnis possimus autem sapiente voluptas distinctio, est rem aperiam sequi nostrum minus dolore quia incidunt, quidem nam maiores. Sit officiis voluptatem quo hic. Perferendis dicta magnam rem aliquam assumenda. Quas, eligendi praesentium cumque, possimus consequuntur vero numquam, magni magnam beatae delectus nesciunt incidunt ex pariatur reiciendis doloribus neque hic consequatur modi veritatis nemo. Illum laudantium maxime, cum beatae quibusdam eaque nulla est dolorem. Cumque non consequatur illum ex nemo ab, sit voluptate, accusamus temporibus, omnis quisquam mollitia dicta nisi porro cum. Consequatur voluptates minus aspernatur reprehenderit quos beatae voluptatibus nulla ut ratione, exercitationem laboriosam harum dicta unde ab asperiores fuga id provident. Excepturi quo deleniti corrupti pariatur voluptatum maxime. Fuga, consequuntur? Reiciendis doloribus veritatis voluptate error officia, non nam quos. Eveniet tempora perferendis voluptatibus veritatis, ex quibusdam iste deserunt repellendus debitis, quam velit, numquam hic corrupti soluta! Dolorum mollitia, voluptatibus corrupti velit, porro nostrum odio suscipit enim esse repudiandae commodi minus voluptate vitae eius sequi corporis deleniti animi iure. Numquam amet ipsa temporibus iure esse, id repudiandae libero facilis commodi necessitatibus vel exercitationem, maiores repellat! Tempore eos aut eum placeat vel eius, deleniti quasi! Molestias temporibus recusandae animi omnis! Voluptatibus ducimus voluptates quo earum, nemo hic quis soluta natus iure ipsum aspernatur voluptatem vitae, dolores beatae esse minima sunt nesciunt laudantium asperiores odit adipisci aut nobis. Consequuntur quaerat saepe ad a aliquam, qui obcaecati! Quaerat doloremque natus voluptatum provident labore? Accusantium quos, harum libero consectetur ad veniam ratione iste sit officiis, dolores in exercitationem, tenetur unde facilis fugiat magnam! Voluptatem eveniet blanditiis maxime repudiandae nemo sequi earum commodi saepe molestiae eligendi temporibus qui sapiente voluptatibus corrupti, excepturi architecto aliquid, recusandae reiciendis placeat a veritatis, iusto ea. Reiciendis hic, officia asperiores ut amet alias explicabo id eligendi neque atque iusto voluptas in dolore fugiat dolores, sequi quos obcaecati. Aperiam, non. Aut non modi magnam harum repudiandae! Ab laudantium quas, quae id libero consectetur enim vitae?</div>
    </section>
    
  );
}

export default Home;
