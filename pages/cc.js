import React, { useRef, useState } from "react";
import Header2 from "../components/Header2";
import ContentSection2 from "../components/ContentSection2";
import Head from "next/head";
import {useIsomorphicLayoutEffect} from "../utils/"
import { stagger } from "../animations";
import { useRouter } from "next/router";
import Image from 'next/image';
import 'katex/dist/katex.min.css';
import Switcher2 from "../components/Switcher2";
import ButtonGradient from "../components/ButtonGradient";
import Router from "next/router";

const Cc = () => {
  const myTexts = [
    { textOne: "youshouldntbehere"},
    { textOne: "您不应该在这里"},
    { textOne: "giveway"},
    { textOne: "遵命"},
    { textOne: "跪下"}
  ];
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();
  const router = useRouter();

  useIsomorphicLayoutEffect(() => {
    stagger([textOne.current, textTwo.current, textThree.current, textFour.current], { y: 30 }, { y: 0 });
  }, []);

  return (
    <>
      <Head>
        <title>404 - Page not Found</title>
      </Head>

      <div
        className={`container mx-auto mt-10`}
      >
        <Header2 isBlog={true}>
          <div className="text-bold"><Switcher2></Switcher2></div>
          </Header2>
        <div className="mx-auto mob:w-5/6 laptop:w-3/5">
          <div className="relative w-full h-96 rounded-lg shadow-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1709895353959-5e170f933758?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              layout="fill"
              alt="Ma'rifah"
              objectFit="cover"
              className="object-cover"
            />
          </div>
          <h1
            ref={textOne}
            className="mt-10 mb-2 text-4xl mob:text-xl laptop:text-4xl font-bold"
          >
            Ma&apos;rifah
          </h1>
          <h2
            ref={textTwo}
            className="mt-4 mb-2 text-l max-w-4xl text-darkgray opacity-50"
          >
            the great anew. Become the dreamer, the writer, and a mover of fate. Behold the divine vision unveiled.
          </h2>
          <h3 ref={textThree} className="mt-2 tablet:text-l max-w-4xl mob:text-s text-darkgray opacity-30" style={{ fontSize: "smaller",color: "rgba(255, 255, 255, 0.5)" }}>
            by ...
          </h3>
          <div ref={textFour} className="text-l">
            <ContentSection2>
              {`
              
              ## Wine and Grapes

              What is it that you want to capture?
              
              The moving seas?
              The light among the clouds?
              Or the way the sun embraces the moon?
              
              There isn't much out here. But if I could, I would.
              
              I would raze the sky from horizon to zenith if it meant you would be denied grace. To rise with the sun, to set with the moon, this is my fateful encounter. I wipe my tears and look up to see the righteous and the wicked lock eyes with each other.
              
              "May our children never eat at the same table." the righteous snarled, shaking with fury.
              
              "I will devour your children, and your children's children, and your children's children's children." replied the wicked, ready at arms.
              
              "I would raze the sky from horizon to zenith if it meant you would be denied grace." I said.
              
              The air shifted.
              
              "There is no place for you here. You might as well be dust." I heard from behind me. I turned around and saw a mysterious face.
              
              "Dust is the foundation of all things."
              
              "Dust do not speak."
              
              I chuckled. "Could've fooled me."
              
              The mysterious face beckoned me, "Such a meaningless fight, isn't it?"
              
              "For you, maybe. But to me, it means everything."
              
              The mysterious face unveils, "I am majesty. Oh, how astute are my subjects."
              
              I sigh. "You shouldn't be here."
              
              The mysterious face frowns, "We do what we want. Give way."
              
              The weight of those words nearly crushes me, "I give way, my Lord."
              
              The mysterious face pats me on the back affectionately, and gratitude fills my mind and body. The stars rise over this wide expanse. They dance and they sparkle, they tell stories and they sing. It is only through grace that I may stand before their enchanting performance.
              
              "Am I too late?" I ask, to no one in particular.
              
              "You're never too late." answers no one in particular.
              
              I smile and be free. For the first time, hope, and the dawn of a new day.
              
              The mysterious face smiles with me, "Give way to my subject. Prostrate."
              
              ## Face to Face
              
              Thus, righteous and wicked, horizon to zenith, all lay prostrated.
              
              "It feels nice to be pampered." I grinned, taking in their forms. As far as the eye could see, and then some, were heads bowed down to the earth.
              
              "Pampered? This is recognition." The mysterious face responds.
              
              I look again, and I see a lone head raised. Piercing eyes cut into me. I do not quite know what to think. Finding courage that was not quite there before, I meet his challenge and return his greetings thousandfold. We both break thereafter. Whispers cloud my thoughts, and guilt muddies my vision. I look back to the mysterious face for guidance, but I meet a veil, cascading like a waterfall, and I very nearly lurch over in illness.
              
              "I'm happy you're here." My head snaps back to the voice. It was no one in particular.
              
              "You, too, are my subject. Prostrate." boomed the mysterious face.
              
              "Majesty, I make way." I watch as no one in particular falls to the earth.
              
              "The day you die," the mysterious face turns to me, "I will be very happy."
              
              I shivered. There are things I don't know. Things I don't understand. A younger me would've hated that, but present me is thankful. There is still much to learn, and wrongs to right.
              
              "Majesty, I make way." I repeat. I too fall in prostration.
              
              As my head meets the soil, I remember the piercing eyes. 
              
              "Rise." All respond to the command.
              
              I feel my head blank. What happened? Where am I?
              
              "What is it that you want to capture?" It takes an eternity for my head to turn to the source-- a mysterious face.
              
              ## Wine and Grapes 
              
              "The moving seas?"
              
              "The light among the clouds?"
              
              "Or the way the sun embraces the moon?"
              
              There isn't much that I say. I sit there, in quiet contemplation, my eyes closed and my breathing slow.
              
              "I would raze the sky from horizon to zenith if it meant she would be denied grace." I responded. My eyes flew open. The mysterious face eludes me.
              
              I grasped the sword to my side, "To rise with the sun, to set with the moon, this is my fateful encounter."
              
              I wipe my tears and look up to see the righteous and the wicked lock eyes with each other.
              
              "May our children never eat at the same table." the righteous snarled, shaking with fury.
              
              "I will devour your children, and your children's children, and your children's children's children." replied the wicked, ready at arms.
              
              "Return to form. Your children aren't you." All eyes turn to me, "Your children aren't y-"
              
              Fear. I felt fear.
              
              "I'm scared of you." My head snapped behind me, to the voice that interrupted me.
              
              I turned to face no one in particular, yet again. Her eyes shone and my heart stopped in awe. I have always been captivated by her beauty. I try to turn my eyes away, but like a moth to a lamp, I am trapped in her prison.
              
              "I'm sorry." I respond, "It was never supposed to be like this. They were hollow words-- vanity."
              
              Her eyes sparkled. She looks at me and smiled sweetly. The righteous and the wicked draw their weapons.
              
              "The wicked deserve to be cast down. The sinners, scalded, then skinned. I, righteous. I, righteous. I, righteous. I'll forget you, except for brief moments of weakness, but I curse you to remember me for all time."
              
              I cried and I wailed. I was sorrry. I never meant for it to be like this. Tears falling, I put my head down, "Do what you must. I deserve it."
              
              And thus, in the blink of an eye, a hand came through my chest. Blood stains the ground, and I fall in silent agony.
              
              "For the sinners and the wicked, there is no relief." Piercing eyes meet the hole in my chest, then my eyes.
              
              I deserve it.
              
              ## Face to Face
              
              "What is it that you want to capture?"
              
              "The moving seas?"
              
              "The light among the clouds?"
              
              "Or the way the sun embraces the moon?"
              
              I tore my piercing gaze away from his bloody, mangled body, and that hole in his chest, to face the mysterious face, "This."
              
              "How wicked."
              
              I bow my head briefly in acknowledgement. Tyrants deserve neither love nor second chances.
              
              "Did you ever consider that he wanted to change?"
              
              "Tyrants deserve neither love nor second chances."
              
              "But he was never a tyrant."
              
              "You..." I said through gritted teeth, "are not supposed to be here." What did he know?
              
              "We all sin."
              
              "To that degree?"
              
              "No, not to that degree. But he didn't either."
              
              "The wicked deserve to be cast down! The sinners, scalded, then skinned!"
              
              "Prostrate."
              
              My eyes widened, "What?"
              
              "Prostrate."
              
              I hestitate for a moment, considering if showing defiance is worth it. But I relent, and bow my head toward to the mysterious figure.
              
              "Not to me, to him."
              
              "No, you wouldn't..." I felt my body shaking in anger and fear and tears pooling in my eyes, "Please."
              
              "Make way."
              
              I turned to look at his corpse one more time, before bowing my head toward the earth.
              `}

            </ContentSection2>
            <div className="flex justify-center items-center mt-10 mb-10">
              <ButtonGradient onClick={() => Router.push('/')}>
                <div className="font-semibold">Take me home!</div>
              </ButtonGradient>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cc;
