"use strict";
var Promise_1 = require('../core/util/Promise');
var FlumpTexture_1 = require("./FlumpTexture");
var Canvas = require("canvas");
var fs = require("fs");
var FlumpTextureGroupAtlas = (function () {
    function FlumpTextureGroupAtlas(renderTexture, json) {
        this.flumpTextures = {};
        this.renderTexture = renderTexture;
        var textures = json.textures;
        for (var i = 0; i < textures.length; i++) {
            var texture = textures[i];
            this.flumpTextures[texture.symbol] = new FlumpTexture_1.FlumpTexture(renderTexture, texture);
        }
    }
    FlumpTextureGroupAtlas.load = function (flumpLibrary, json) {
        var file = json.file;
        var url = flumpLibrary.url + '/' + file;
        return new Promise_1.Promise(function (resolve, reject) {
            var img = new Canvas.Image;
            fs.readFile(url, function (err, imageData) {
                if (err) {
                    reject();
                }
                else {
                    img.src = imageData;
                    resolve(img);
                }
            });
        }).then(function (data) {
            return new FlumpTextureGroupAtlas(data, json);
        });
    };
    return FlumpTextureGroupAtlas;
}());
exports.FlumpTextureGroupAtlas = FlumpTextureGroupAtlas;
