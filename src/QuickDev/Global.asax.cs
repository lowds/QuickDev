using System;
using System.Web.Http;

namespace QuickDev
{
    public class Global : System.Web.HttpApplication
    {

        protected void Application_Start(object sender, EventArgs e)
        {
            GlobalConfiguration.Configuration.Routes.MapHttpRoute("Default",
                "api/{controller}/{id}",
                new { id = RouteParameter.Optional });
        }
    }
}