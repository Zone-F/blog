define({ "api": [
  {
    "type": "post",
    "url": "/article/list",
    "title": "获取文章列表",
    "name": "_ArticleList",
    "group": "Article",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageNum",
            "description": "<p>第n页.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每页n条.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>[{_id:'',title:'',body:'',updateTime:'',createTime:''}].</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "pageNum",
            "description": "<p>当前页数</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>总条数</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每页条数</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/controller/article.js",
    "groupTitle": "Article"
  },
  {
    "type": "del",
    "url": "/article",
    "title": "删除文章",
    "name": "delArticle",
    "group": "Article",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>文章_id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>标题.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "body",
            "description": "<p>正文.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tags",
            "description": "<p>'_tid1,tid2'.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>[{_id:'',title:'',body:'',updateTime:'',createTime:''}].</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "tags",
            "description": "<p>[{_id:'',tid:[{name:'',tid:''}]}]</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/controller/article.js",
    "groupTitle": "Article"
  },
  {
    "type": "post",
    "url": "/article/detail",
    "title": "获取文章",
    "name": "getArticle",
    "group": "Article",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>文章_id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>[{_id:'',title:'',body:'',updateTime:'',createTime:''}].</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "tags",
            "description": "<p>[{_id:'',tid:[{name:'',tid:''}]}]</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/controller/article.js",
    "groupTitle": "Article"
  },
  {
    "type": "post",
    "url": "/article/tag",
    "title": "获取文章",
    "name": "getArticleByTag",
    "group": "Article",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>标签_id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>[].</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/controller/article.js",
    "groupTitle": "Article"
  },
  {
    "type": "post",
    "url": "/article",
    "title": "新增文章",
    "name": "newArticle",
    "group": "Article",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>标题.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "body",
            "description": "<p>正文.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tags",
            "description": "<p>'_tid1,tid2'.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/controller/article.js",
    "groupTitle": "Article"
  },
  {
    "type": "put",
    "url": "/article",
    "title": "修改文章",
    "name": "putArticle",
    "group": "Article",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>文章_id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>标题.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "body",
            "description": "<p>正文.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tags",
            "description": "<p>'_tid1,tid2'.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/controller/article.js",
    "groupTitle": "Article"
  },
  {
    "type": "post",
    "url": "/tag/list",
    "title": "获取标签列表",
    "name": "Cet_tag_list",
    "group": "Tag",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>tagId.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "code",
            "description": "<ol start=\"200\"> <li></li> </ol>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>[{_id:'',name:'';createTime:''}].</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/controller/tag.js",
    "groupTitle": "Tag"
  },
  {
    "type": "post",
    "url": "/tag",
    "title": "新增分类",
    "name": "Create_new_tag",
    "group": "Tag",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>标签名字.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/controller/tag.js",
    "groupTitle": "Tag"
  },
  {
    "type": "del",
    "url": "/tag",
    "title": "删除分类",
    "name": "Delete_tag",
    "group": "Tag",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>标签id.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/controller/tag.js",
    "groupTitle": "Tag"
  },
  {
    "type": "put",
    "url": "/tag",
    "title": "修改分类",
    "name": "Put_Tag",
    "group": "Tag",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>标签id.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/controller/tag.js",
    "groupTitle": "Tag"
  },
  {
    "type": "post",
    "url": "/test",
    "title": "response返回示例",
    "name": "Resonse_Test",
    "group": "Test",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "code",
            "description": "<p>200成功，201失败，500出错.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "message",
            "description": "<p>操作提示.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "err",
            "description": "<p>如果出错,则出现错误提示.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/controller/tag.js",
    "groupTitle": "Test"
  }
] });
