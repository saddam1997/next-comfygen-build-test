import Image from "next/image";
export default function Home() {
  return (
    <>
      <section className="md:space-y-0 space-y-10 items-center ">
        <div className=" grid lg:grid-cols-6 md:grid-cols-5 grid-cols-3 lg:gap-10 gap-6">
          <div className=" rounded-lg space-y-2 border">
            <div className="p-3">
              <Image width={48} height={48} src="images/mysql.svg" alt="MySql" className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="md:text-lg text-base font-medium text-center">MySql</h3>
          </div>
          <div className=" rounded-lg space-y-2 border">
            <div className="p-3">
              <Image width={48} height={48} src="images/mongodb.png" alt="MongoDB" className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="md:text-lg text-base font-medium text-center">MongoDB</h3>
          </div>
          <div className=" rounded-lg space-y-2 border">
            <div className="p-3">
              <Image width={48} height={48} src="images/redis.webp" alt="Redis" className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="md:text-lg text-base font-medium text-center">Redis</h3>
          </div>
          <div className=" rounded-lg space-y-2 border">
            <div className="p-3">
              <Image width={48} height={48} src="images/sql-server.png" alt="Microsoft SQ" className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="md:text-lg text-base font-medium text-center">Microsoft SQL</h3>
          </div>
          <div className=" rounded-lg space-y-2 border">
            <div className="p-3">
              <Image width={48} height={48} src="images/orcale.png" alt="Oracle Database" className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="md:text-lg text-base font-medium text-center">Oracle Database</h3>
          </div>
          <div className=" rounded-lg space-y-2 border">
            <div className="p-3">
              <Image width={48} height={48} src="images/Database-postgres.png" alt="Postgre SQL" className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="md:text-lg text-base font-medium text-center">Postgre SQL</h3>
          </div>
          <div className=" rounded-lg space-y-2 border">
            <div className="p-2">
              <Image width={48} height={48} src="images/sqllite.png" alt="SQLite" className="w-14 h-14 mx-auto" />
            </div>
            <h3 className="md:text-lg text-base font-medium text-center">SQLite</h3>
          </div>
        </div>
      </section>
    </>
  )
}
