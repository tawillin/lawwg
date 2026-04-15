"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

const YOUTUBE_VIDEO_ID = "uLjxx2HLfMA";

export default function FounderSpotlight() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Text column */}
          <div>
            <motion.div variants={fadeUp} className="w-32 h-32 rounded-full overflow-hidden relative mb-6 border-2 border-gold-500/40">
              <Image
                src="/attorneys/taylor-willingham.png"
                alt="Taylor Willingham"
                fill
                className="object-cover object-[center_20%]"
                sizes="128px"
              />
            </motion.div>
            <SectionHeader
              eyebrow="Meet the Founder"
              title="Attorney Taylor Willingham"
              className="mb-6"
            />

            <motion.p
              variants={fadeUp}
              className="text-slate-600 text-base leading-relaxed mb-4"
            >
              From assisting individuals with creating a will that can help
              protect their children for the long term to creating a business
              succession plan for a family business owner, Mr. Willingham truly
              enjoys helping his clients through every stage of future planning.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-slate-600 text-base leading-relaxed mb-4"
            >
              Mr. Willingham is also highly regarded for his estate planning
              experience. He has been selected as a guest on podcasts and
              television shows, and he has authored five books on estate planning
              and elder law.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-slate-600 text-base leading-relaxed mb-8"
            >
              Led by founding attorney{" "}
              <span className="font-semibold text-navy-900">
                Taylor Willingham
              </span>
              , the entire legal team takes pride in creating, drafting, and
              enforcing powerful estate plans that can protect estates of all
              sizes. We understand that you have lived your life in such a way
              that has shaped a tremendous legacy. You have created a home and
              nurtured your relationships and deserve to live out the hopes and
              dreams of your family. Protect those hopes and dreams by planning
              for the future in advance.
            </motion.p>

            <motion.div variants={fadeUp}>
              <Button
                href="/attorneys/taylor-willingham"
                variant="secondary"
                size="md"
              >
                Full Bio
              </Button>
            </motion.div>
          </div>

          {/* Video column */}
          <motion.div
            variants={fadeUp}
            className="relative"
          >
            <div className="bg-navy-900 rounded-sm overflow-hidden">
              <p className="text-gold-400 text-xs font-semibold tracking-[0.2em] uppercase px-6 pt-6 pb-3">
                As Seen On Good Morning Texas
              </p>
              <div className="aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`}
                  title="Taylor Willingham on Good Morning Texas talking about his new book"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <p className="text-white/70 text-sm px-6 py-4">
                Taylor Willingham on Good Morning Texas talking about his new
                book
              </p>
            </div>
            {/* Decorative gold border offset */}
            <div className="absolute -bottom-3 -right-3 w-full h-full border border-gold-500/30 rounded-sm pointer-events-none" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
