import m from 'mithril'
import './editor.scss'

export default () => {
  return (
    <div className="editor-page">
      <div className="container page">
        <div className="row">

          <div className="col-md-10 col-md-offset-1 col-xs-12">
            <form>
              <fieldset className="form-group">
                <input className="form-control form-control-lg" type="text" placeholder="Post Title" />
              </fieldset>
              <fieldset className="form-group">
                <textarea className="form-control" rows="8" placeholder="Write your post (in markdown)" />
              </fieldset>
              <fieldset className="form-group">
                <input className="form-control" type="text" placeholder="Enter tags" />
                <div className="tag-list">
                  <span className="label label-pill label-default"><i className="ion-close-round"></i> programming</span>
                  <span className="label label-pill label-default"><i className="ion-close-round"></i> javascript</span>
                  <span className="label label-pill label-default"><i className="ion-close-round"></i> webdev</span>
                </div>
              </fieldset>
              <button className="btn btn-lg btn-primary pull-xs-right">
                Create Post
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}