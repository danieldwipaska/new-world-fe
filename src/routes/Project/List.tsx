import { Link } from 'react-router-dom';
import newWorldGif from '../../danielkamasi-web-app.gif';
import cashierAppGif from '../../cashier-app.gif';
import musicianAppGif from '../../musician.gif';
import whatsappAutoGif from '../../whatsapp-automation.gif';
export const List = () => {
  return (
    <div className="grid grid-cols-1">
      <div>
        <div className="grid grid-cols-1 border-b border-orange-300 md:grid-cols-2 py-4 md:py-0">
          <div className="self-center text-center">
            <p className="text-4xl font-light text-slate-300">Personal Website</p>
            <p className="text-sm mt-5 mx-10 font-light text-slate-300">
              This website was created by myself for professional purposes by implementing <span className="font-semibold">React Typescript</span> as a display application and <span className="font-medium">Nest JS</span> as a server
              application. Also, it is intended to show my portfolio and blog which I have integrated with.
            </p>
            <Link to="https://github.com/danieldwipaska/new-world-fe" target="_blank">
              <button className="ml-3 mt-4 px-4 py-2 bg-zinc-300 rounded-full hover:bg-inherit border border-zinc-300 hover:text-slate-300">Frontend</button>
            </Link>
            <Link to="https://github.com/danieldwipaska/new-world-be" target="_blank">
              <button className="ml-3 mt-4 px-4 py-2 bg-orange-300 rounded-full hover:bg-inherit border border-orange-300 hover:text-slate-300">Backend</button>
            </Link>
          </div>
          <div className="flex justify-center py-10" style={{ backgroundColor: '#34353a' }}>
            <img src={newWorldGif} alt="New World" />
          </div>
        </div>
        <div className="grid grid-cols-1 border-b border-orange-300 md:grid-cols-2 py-4 md:py-0">
          <div className="flex justify-center py-10" style={{ backgroundColor: '#34353a' }}>
            <img src={cashierAppGif} alt="Cashier App" />
          </div>
          <div className="self-center text-center">
            <p className="text-4xl font-light text-slate-300">Cashier App</p>
            <p className="text-sm mt-5 mx-10 font-light text-slate-300">
              This is an application similar to a web-based cashier application but has a top-up system in the payment method. This application is planned to be released in the near future at a local cafe.{' '}
              <span className="font-semibold">EJS</span> and <span className="font-medium">Node JS</span> were implemented in building this application.
            </p>
            <Link to="https://github.com/danieldwipaska/cashier_topup_app/tree/development" target="_blank">
              <button className="ml-3 mt-4 px-4 py-2 bg-orange-300 rounded-full hover:bg-inherit border border-orange-300 hover:text-slate-300">Code</button>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 border-b border-orange-300 md:grid-cols-2 py-4 md:py-0">
          <div className="self-center text-center">
            <p className="text-4xl font-light text-slate-300">Musician App</p>
            <p className="text-sm mt-5 mx-10 font-light text-slate-300">
              For musicians and event organizers who need bands or guest stars, I built an application to serve musician market. It can search for bands for the event organizers and search for jobs for the musicians. This application is
              built with <span className="font-semibold">EJS</span> and
              <span className="font-medium">Node JS</span> as a whole.
            </p>
            <Link to="https://github.com/danieldwipaska/client-server_musician" target="_blank">
              <button className="ml-3 mt-4 px-4 py-2 bg-orange-300 rounded-full hover:bg-inherit border border-orange-300 hover:text-slate-300">Code</button>
            </Link>
          </div>
          <div className="flex justify-center py-10" style={{ backgroundColor: '#34353a' }}>
            <img src={musicianAppGif} alt="New World" />
          </div>
        </div>
        <div className="grid grid-cols-1 border-b border-orange-300 md:grid-cols-2 py-4 md:py-0">
          <div className="flex justify-center py-10" style={{ backgroundColor: '#34353a' }}>
            <img src={whatsappAutoGif} alt="Cashier App" style={{ width: 300 }} />
          </div>
          <div className="self-center text-center">
            <p className="text-4xl font-light text-slate-300">Whatsapp Automation</p>
            <p className="text-sm mt-5 mx-10 font-light text-slate-300">
              Bringing whatsapp business into auto-reply, I made an application running on a server to provide chat automation for a company or organization. <span className="font-semibold">Node JS</span>, once again, is a powerful runtime
              to make it possible. This application has been used by one of churches in Malang City.
            </p>
            <Link to="https://github.com/gpibimmmlg/whatsapp_client" target="_blank">
              <button className="ml-3 mt-4 px-4 py-2 bg-orange-300 rounded-full hover:bg-inherit border border-orange-300 hover:text-slate-300">Code</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
